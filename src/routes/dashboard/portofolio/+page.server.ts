import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
  const supabase = locals.supabase;
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  const isAuthenticated = !!user;

  if (userError || !isAuthenticated) {
    return { status: 401, body: { error: 'User not authenticated', isAuthenticated: false } };
  }

  const folder = url.searchParams.get('folder') || '1';
  const validFolders = ['1', '2', '3', '4'];

  if (!validFolders.includes(folder)) {
    console.error('Invalid folder specified:', folder);
    return { total: 0, images: [], isAuthenticated, userEmail: user.email };
  }

  const { data: files, error: storageError } = await supabase.storage
    .from('porto')
    .list(`images/${folder}`);

  if (storageError) {
    console.error('Error fetching files:', storageError);
    return { total: 0, images: [], isAuthenticated, userEmail: user.email };
  }

  const imageUrls = await Promise.all(files.map(async (file) => {
    const { data: publicUrlData } = supabase.storage
      .from('porto')
      .getPublicUrl(`images/${folder}/${file.name}`);

    if (!publicUrlData) {
      console.error('Error fetching public URL for file:', file.name);
      return null;
    }

    return publicUrlData.publicUrl;
  }));

  return { 
    total: imageUrls.filter(url => url !== null).length, 
    images: imageUrls.filter(url => url !== null), 
    folder, 
    isAuthenticated, 
    userEmail: user.email 
  };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const supabase = locals.supabase;
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { status: 401, body: { error: 'User not authenticated' } };
    }

    const method = request.method;

    // Handle file upload
    if (method === 'POST') {
      const data = await request.formData();
      const file = data.get('file') as File;
      const folder = data.get('folder') || '1';

      if (!file) {
        return { status: 400, body: { error: 'No file uploaded' } };
      }

      const filePath = `images/${folder}/${file.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from('porto')
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading file:', error.message);
        return { status: 500, body: { error: error.message } };
      }

      return { status: 200, body: { message: 'File uploaded successfully', data: uploadData } };
    }

    return { status: 405, body: { error: 'Invalid request method for default action' } }; 
  },

  delete: async ({ request, locals }) => {
    const supabase = locals.supabase;
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { status: 401, body: { error: 'User not authenticated' } };
    }

    const data = await request.json();
    const image = data.image;
    const folder = data.folder;

    if (!image || !folder) {
      return { status: 400, body: { error: 'Missing image or folder' } };
    }

    const { error } = await supabase.storage
      .from('porto')
      .remove([`images/${folder}/${image}`]);

    if (error) {
      console.error('Error deleting file:', error.message);
      return { status: 500, body: { error: error.message } };
    }

    return { status: 200, body: { message: 'File deleted successfully' } };
  }
};
