import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error('User is not authenticated:', userError);
      return { total: 0, imageUrls: [] };
    }

    const subfolders = ['1', '2', '3', '4'];
    const imageUrls: string[] = [];

    const folderPromises = subfolders.map(async (subfolder) => {
      const { data: files, error: listError } = await supabase.storage
        .from('porto')
        .list(`images/${subfolder}`);

      if (listError) {
        console.error(`Error listing files in images/${subfolder}:`, listError);
        return [];
      }

      const urlPromises = files?.map(file => 
        supabase.storage.from('porto').getPublicUrl(`images/${subfolder}/${file.name}`)
      ) || [];

      const urlData = await Promise.all(urlPromises);
      return urlData
        .map(data => data.data?.publicUrl)
        .filter((url): url is string => url !== undefined);
    });

    const results = await Promise.all(folderPromises);
    results.forEach(urls => imageUrls.push(...urls));

    return { total: imageUrls.length, imageUrls };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, imageUrls: [] };
  }
};
