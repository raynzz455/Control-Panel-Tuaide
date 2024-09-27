<script lang="ts">
    export let comments: { komentar: string; nama_customer: string; keterangan_customer: string; created_at: string }[] = [];
    let showForm = false;
</script>

<body class="h-screen w-screen">
    <div class="content w-full sm:max-w-[1000px] max-h-[90vh] mx-auto">
        <div class="w-full h-[60px] mx-auto rounded-tl-2xl rounded-tr-2xl">
            <button 
                class="bg-transparent text-black font-bold border-2 border-black py-2 px-3 rounded-full mt-2 hover:shadow-[4px_4px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300" 
                on:click={() => { showForm = !showForm; }}>
                Add Comment
            </button>
        </div>

        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 mt-5">
            {#each comments as { komentar, nama_customer, keterangan_customer }}
                <div class="border-2 border-black rounded-lg w-full sm:w-[300px] h-[230px] sm:h-[200px] mx-auto p-4 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[4px_4px_0px_black]">
                    <div class="flex flex-col justify-between h-full">
                        <div class="text-center text-lg font-semibold mb-2">
                            "{komentar}"
                        </div>
                        <div class="text-center text-md font-medium">
                            {nama_customer}
                        </div>
                        {#if keterangan_customer}
                            <div class="text-center text-sm text-gray-600">
                                {keterangan_customer}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>

        {#if showForm}
            <!-- Form code here -->
        {/if}
    </div>
</body>
