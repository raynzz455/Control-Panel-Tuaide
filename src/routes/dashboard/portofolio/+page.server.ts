import type { PageServerLoad } from './$types';
import supabase from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ url }) => {
  try {
    // Ambil parameter folder dari query string
    const folder = url.searchParams.get('folder') || '1'; // Default ke folder '1' jika tidak ada parameter

    // Validasi folder untuk mencegah akses ke folder yang tidak ada
    const validFolders = ['1', '2', '3', '4'];
    if (!validFolders.includes(folder)) {
      console.error('Invalid folder specified:', folder);
      return { total: 0, images: [] }; // Folder tidak valid
    }

    // Fetch the list of files in the selected folder inside the "images" folder of the "porto" bucket
    const { data: files, error: storageError } = await supabase.storage
      .from('porto')
      .list(`images/${folder}`); // Path ke folder yang dipilih

    if (storageError) {
      console.error('Error fetching files:', storageError);
      return { total: 0, images: [] }; // Handle storage errors gracefully
    }

    // Get URLs of all images
    const imageUrls = await Promise.all(files.map(async (file) => {
      const { data: publicUrlData } = supabase.storage
        .from('porto')
        .getPublicUrl(`images/${folder}/${file.name}`);

      // URL tidak memiliki properti error, jadi kita hanya memeriksa apakah data publicUrl ada
      if (!publicUrlData?.publicUrl) {
        console.error('Error getting public URL for file:', file.name);
        return null; // Mengabaikan gambar jika URL tidak dapat diambil
      }

      return publicUrlData.publicUrl;
    }));

    // Filter out null values
    const images = imageUrls.filter((url) => url !== null);

    return { total: images.length, images }; // Mengembalikan total dan URL gambar
  } catch (error) {
    console.error('Unexpected error:', error);
    return { total: 0, images: [] }; // Handle unexpected errors gracefully
  }
};
