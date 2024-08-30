import type { PageServerLoad } from './$types';
import supabase from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
  try {
    // Fetch the list of files in the "1" folder inside the "images" folder of the "porto" bucket
    const { data: files, error: storageError } = await supabase.storage
      .from('porto')
      .list('images/1'); // Path yang diubah untuk folder "1" di dalam folder "images"

    if (storageError) {
      console.error('Error fetching files:', storageError);
      return { total: 0, firstImageUrl: '' }; // Handle storage errors gracefully
    }

    // Get the total number of files
    const total = files.length;

    // Ensure there is at least one file
    if (total === 0) {
      return { total, firstImageUrl: '' }; // Indicate no images found
    }

    // Get the URL of the first image
    const firstImage = files[0];
    const { data: publicUrlData } = await supabase.storage
      .from('porto')
      .getPublicUrl(`images/1/${firstImage.name}`);

    return { total, firstImageUrl: publicUrlData.publicUrl };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, firstImageUrl: '' }; // Handle unexpected errors gracefully
  }
};
