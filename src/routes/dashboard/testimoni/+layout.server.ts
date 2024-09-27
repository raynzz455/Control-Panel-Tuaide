import type { LayoutServerLoad } from './$types';

interface Komentar {
    komentar: string;
    nama_customer: string;
    keterangan_customer: string;
}

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        return {
            status: 401,
            body: { message: 'User not authenticated' }
        };
    }

    const { data: komentarData, error: fetchError } = await supabase
        .from('customer_comments')
        .select('id, komentar, nama_customer, keterangan_customer') 
        .order('created_at', { ascending: false });

    if (fetchError) {
        console.error('Error fetching comments:', fetchError);
        return {
            status: 500,
            body: { message: 'Failed to fetch comments' }
        };
    }

    // Memastikan data komentar tidak null
    if (komentarData) {
        console.log('Fetched comments:', komentarData);
    } else {
        console.log('No comments found.');
    }

    // Mengonversi komentarData ke format yang diinginkan
    const komentar_uhuy: { [id: string]: Komentar } = {}; // Definisikan tipe di sini
    komentarData.forEach(comment => {
        komentar_uhuy[comment.id] = {
            komentar: comment.komentar,
            nama_customer: comment.nama_customer,
            keterangan_customer: comment.keterangan_customer
        };
    });

    // Cetak komentar_uhuy di console sebelum mengembalikannya
    console.log('Komentar Uhuy:', komentar_uhuy);

    return { komentar_uhuy }; 
};
