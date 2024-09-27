import type { Actions } from './$types';


export const actions: Actions = {
    default: async ({ request, locals }) => {
        const supabase = locals.supabase;
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            return { status: 401, body: { message: 'User not authenticated' } };
        }

        const formData = await request.formData();
        const nama_customer = formData.get('nama_customer') as string;
        const komentar = formData.get('komentar') as string;
        const keterangan_customer = formData.get('keterangan_customer') as string || '';

        if (!nama_customer || !komentar) {
            return { status: 400, body: { message: 'Name and comment are required' } };
        }

        const { data, error: insertError } = await supabase
            .from('customer_comments')
            .insert([{ nama_customer, komentar, keterangan_customer }])
            .select(); 

        if (insertError) {
            console.error('Error inserting comment:', insertError);
            return { status: 500, body: { message: 'Failed to add comment' } };
        }

        return { status: 200, body: data[0] }; 
    }
};
