<script lang="ts">
    export let komentar_uhuy: { [id: string]: { komentar: string; nama_customer: string; keterangan_customer: string } } = {};
    let showForm = false;

    console.log('Comments received:', komentar_uhuy);

    const handleSubmit = async (event: Event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target as HTMLFormElement);
        
        const response = await fetch('', { 
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const newComment = await response.json();
            komentar_uhuy[newComment.id] = {
                komentar: newComment.komentar,
                nama_customer: newComment.nama_customer,
                keterangan_customer: newComment.keterangan_customer
            };
            showForm = false; 
        } else {
            const errorResponse = await response.json();
            console.error('Error submitting comment:', errorResponse.message);
            alert('Failed to submit comment: ' + errorResponse.message);
        }
    };
</script>

<body class="h-screen w-screen">
    <div class="content w-full sm:max-w-[1000px] max-h-[90vh] mx-auto">
        <div class="w-full h-[60px] mx-auto rounded-tl-2xl rounded-tr-2xl flex justify-between items-center">
            <h2 class="text-lg font-bold">Daftar Komentar</h2>
            <button 
                class="bg-transparent text-black font-bold border-2 border-black py-2 px-3 rounded-full mt-2 hover:shadow-[4px_4px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300" 
                on:click={() => { showForm = !showForm; }}>
                {showForm ? 'Cancel' : 'Add Comment'}
            </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each Object.entries(komentar_uhuy) as [id, { komentar, nama_customer, keterangan_customer }]}
                <div class="border-2 border-black rounded-lg w-full sm:w-[300px] h-auto mx-auto p-4 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[4px_4px_0px_black]">
                    <div class="flex flex-col justify-between h-full">
                        <p class="text-center text-lg font-semibold mb-2">"{komentar}"</p>
                        <p class="text-center text-md font-medium">{nama_customer}</p>
                        <p class="text-center text-sm text-gray-600">{keterangan_customer}</p>
                    </div>
                </div>
            {/each}
        </div>
        
        {#if showForm}
            <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div class="bg-white p-5 rounded-md shadow-lg w-11/12 sm:w-1/3 relative border-2 border-black">
                    <button 
                        class="absolute top-2 right-2 text-red-500 bg-transparent text-2xl" 
                        on:click={() => showForm = false}>
                        &times; 
                    </button>
                    <form on:submit={handleSubmit}>
                        <div>
                            <label class="block mb-2 text-lg font-semibold" for="nama_customer">Nama Customer:</label>
                            <input 
                                type="text" 
                                name="nama_customer"
                                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                                required 
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-lg font-semibold" for="komentar">Komentar:</label>
                            <textarea 
                                name="komentar"
                                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                                required 
                            ></textarea>
                        </div>
                        <div>
                            <label class="block mb-2 text-lg font-semibold" for="keterangan_customer">Keterangan Customer:</label>
                            <textarea 
                                name="keterangan_customer"
                                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            class="bg-green-300 border-2 border-black text-black font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        {/if}
    </div>
</body>
