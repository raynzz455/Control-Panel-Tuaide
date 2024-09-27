<script lang="ts">
  import Swal from 'sweetalert2';

  export let data; 
  let showForm = false;

  async function submitComment(event: SubmitEvent) {
    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch('', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const newComment = await response.json();
      data.comments.push(newComment);
      showForm = false; 

      Swal.fire({
        title: 'Success!',
        text: 'Comment successfully posted!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      const errorData = await response.json();
      console.error('Failed to submit comment:', errorData.message);
      Swal.fire({
        title: 'Error!',
        text: errorData.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
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

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {#if data.comments.length > 0}
        {#each data.comments as comment}
          <div class="border-2 border-black rounded-lg w-full sm:w-[300px] h-auto mx-auto p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_10px_8px_black]">
            <div class="flex flex-col justify-between h-full">
              <p class="text-center text-lg font-semibold mb-2">"{comment.komentar}"</p>
              <p class="text-center text-md font-medium">{comment.nama_customer}</p>
              <p class="text-center text-sm text-gray-600">{comment.keterangan_customer}</p>
            </div>
          </div>
        {/each}
      {:else}
        <p>No comments available.</p>
      {/if}
    </div>

    {#if showForm}
      <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-5 rounded-md shadow-lg w-11/12 sm:w-1/3 relative border-2 border-black">
          <button 
            class="absolute top-2 right-2 text-red-500 bg-transparent text-2xl" 
            on:click={() => showForm = false}>
            &times; 
          </button>
          <form on:submit|preventDefault={submitComment}>
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
