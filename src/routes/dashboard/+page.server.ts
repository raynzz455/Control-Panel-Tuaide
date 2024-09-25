import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  try {
    const subfolders = ['1', '2', '3', '4'];
    let totalFiles = 0;
    const imageUrls: string[] = [];

    const folderPromises = subfolders.map(async (subfolder) => {
      const { data: files, error: listError } = await supabase.storage
        .from('porto')
        .list(`images/${subfolder}`);

      if (listError) {
        console.error(`Error listing files in images/${subfolder}:`, listError);
        return [];
      }

      const urlPromises = files?.map(async (file) => {
        const { data: publicUrlData } = await supabase.storage
          .from('porto')
          .getPublicUrl(`images/${subfolder}/${file.name}`);

        return publicUrlData?.publicUrl;
      }) || [];

      const urls = await Promise.all(urlPromises);
      const validUrls = urls.filter((url): url is string => url !== undefined);
      totalFiles += validUrls.length;
      return validUrls;
    });
    const results = await Promise.all(folderPromises);
    results.forEach((urls) => {
      imageUrls.push(...urls);
    });

    return { total: totalFiles, imageUrls };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, imageUrls: [] };
  }
};
