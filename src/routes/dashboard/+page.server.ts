import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  try {
    const subfolders = ['1', '2', '3', '4'];
    let totalFiles = 0;
    const imageUrls: string[] = [];

    for (const subfolder of subfolders) {
      const { data: files, error: listError } = await supabase.storage
        .from('porto')
        .list(`images/${subfolder}`);

      if (listError) {
        console.error(`Error listing files in images/${subfolder}:`, listError);
        continue;
      }

      if (files && files.length > 0) {
        totalFiles += files.length;

        for (const file of files) {
          const { data: publicUrlData } = await supabase.storage
            .from('porto')
            .getPublicUrl(`images/${subfolder}/${file.name}`);

          if (publicUrlData) {
            imageUrls.push(publicUrlData.publicUrl);
          }
        }
      }
    }

    return { total: totalFiles, imageUrls };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, imageUrls: [] };
  }
};
