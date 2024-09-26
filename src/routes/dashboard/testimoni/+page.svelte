<script lang="ts">
    let showForm = false;
</script>

<body class="h-screen w-screen">
    <div class="content w-full sm:max-w-[1000px] max-h-[90vh] mx-auto">
        <div class="w-full h-[60px] mx-auto rounded-tl-2xl rounded-tr-2xl">
            <button 
                class="bg-transparent text-black font-bold border-2 border-black py-2 px-3 rounded-full mt-2 hover:shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300" 
                on:click={() => { showForm = !showForm; }}>
                Add Comment
            </button>
        </div>

        {#if showForm}
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-gray-200 p-4 rounded-md shadow-lg w-11/12 sm:w-1/3 relative">
                <button 
                    class="absolute top-2 right-2 text-red-500 bg-red-200 rounded-full p-1 hover:bg-red-300 transition-colors" 
                    on:click={() => showForm = false}>
                    &times; <!-- Close button -->
                </button>
                <form method="POST">
                    <div>
                        <label class="block mb-2" for="name">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            class="border border-gray-400 p-2 w-full mb-4 rounded"
                            required 
                        />
                    </div>
                    <div>
                        <label class="block mb-2" for="comment">Comment:</label>
                        <textarea 
                            name="comment" 
                            class="border border-gray-400 p-2 w-full mb-4 rounded"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label class="block mb-2" for="description">Description (optional):</label>
                        <textarea 
                            name="description" 
                            class="border border-gray-400 p-2 w-full mb-4 rounded"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        class="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        {/if}
    </div>
</body>
