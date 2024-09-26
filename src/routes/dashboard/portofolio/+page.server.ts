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
    return { total: 0, images: [], isAuthenticated };
  }

  const { data: files, error: storageError } = await supabase.storage
    .from('porto')
    .list(`images/${folder}`);

  if (storageError) {
    console.error('Error fetching files:', storageError);
    return { total: 0, images: [], isAuthenticated };
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
    isAuthenticated 
  };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const supabase = locals.supabase;
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { status: 401, body: { error: 'User not authenticated' } };
    }

    const method = request.headers.get('x-http-method-override') || request.method;

    if (method === 'DELETE') {
      const data = await request.formData();
      const image = data.get('image') as string;
      const folder = data.get('folder') as string || '1'; 

      if (!image || !folder) {
        return { status: 400, body: { error: 'Missing image or folder' } };
      }
      
      const filePath = `images/${folder}/${decodeURIComponent(image)}`;

      const { error: deleteError } = await supabase.storage
        .from('porto')
        .remove([filePath]);

      if (deleteError) {
        console.error('Error deleting file:', deleteError);
        return { status: 500, body: { error: deleteError.message } };
      }

      return { status: 200, body: { message: 'File deleted successfully' } };
    }

    const data = await request.formData();
    const file = data.get('file') as File;
    const folder = data.get('folder') as string || '1';

    if (!file) {
      return { status: 400, body: { error: 'No file uploaded' } };
    }

    const filePath = `images/${folder}/${file.name}`;
    const { data: uploadData, error } = await supabase.storage
      .from('porto')
      .upload(filePath, file);

    if (error) {
      return { status: 500, body: { error: error.message } };
    }

    return { status: 200, body: { message: 'File uploaded successfully', data: uploadData } };
  }
};
