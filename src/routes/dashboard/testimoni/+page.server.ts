import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        return {
            status: 401,
            body: { message: 'You must be logged in to access this page.' }
        };
    }

    const { data, error } = await supabase
        .from('customer_comments')
        .select('*');

    return { comments: data || [], error };
};

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            return {
                status: 401, 
                body: { message: 'You must be logged in to submit a comment.' }
            };
        }

        const formData = await request.formData();
        const name = formData.get('name') as string;
        const comment = formData.get('comment') as string;
        const description = formData.get('description') as string || '';

        const { error } = await supabase
            .from('customer_comments')
            .insert([{ nama_customer: name, komentar: comment, keterangan_customer: description }]);

        if (error) {
            console.error('Error adding comment:', error);
            return {
                status: 500,
                body: { message: 'Failed to add comment' }
            };
        }

        return {
            status: 303, 
            headers: {
                location: '/dashboard/testimoni' 
            }
        };
    }
};
