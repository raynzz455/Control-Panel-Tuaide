import type { PageServerLoad } from './$types';
import supabase from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ url }) => {
  try {
    const folder = url.searchParams.get('folder') || '1'; // Default ke folder '1' jika tidak ada parameter
    const validFolders = ['1', '2', '3', '4'];
    if (!validFolders.includes(folder)) {
      console.error('Invalid folder specified:', folder);
      return { total: 0, images: [] };
    }

    const { data: files, error: storageError } = await supabase.storage
      .from('porto')
      .list(`images/${folder}`);

    if (storageError) {
      console.error('Error fetching files:', storageError);
      return { total: 0, images: [] };
    }

    const imageUrls = await Promise.all(files.map(async (file) => {
      const { data: publicUrlData } = await supabase.storage
        .from('porto')
        .getPublicUrl(`images/${folder}/${file.name}`);

      if (!publicUrlData?.publicUrl) {
        console.error('Error getting public URL for file:', file.name);
        return null;
      }

      return publicUrlData.publicUrl;
    }));

    const images = imageUrls.filter((url) => url !== null);

    return { total: images.length, images };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, images: [] };
  }
};
