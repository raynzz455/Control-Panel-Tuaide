import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        return {
            status: 401,
            body: { message: 'You must be logged in to access this page.' }
        };
    }

    const { data: comments, error: fetchError } = await supabase
        .from('customer_comments')
        .select('komentar, nama_customer, keterangan_customer, created_at')
        .order('created_at', { ascending: false });

    if (fetchError) {
        console.error('Error fetching comments:', fetchError);
        return {
            status: 500,
            body: { message: 'Failed to fetch comments' }
        };
    }

    return { comments: comments || [] };
};
