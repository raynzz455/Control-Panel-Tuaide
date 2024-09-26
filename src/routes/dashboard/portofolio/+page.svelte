<script lang="ts">
  import Fun from '$lib/components/Delup.svelte';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let data: { images: string[], folder: string };

  let selectedFolder = data.folder || '1';
  let isLoading = false;
  let displayClass = 'hidden'; 

  function handleFolderChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedFolder = target.value;
    goto(`?folder=${selectedFolder}`);
  }

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const confirmUpload = confirm(`Apakah kamu yakin untuk mengupload "${file.name}" ini?`);
      if (confirmUpload) {
        isLoading = true;
        input.form?.submit();
      } else {
        input.value = '';
      }
    }
  }

  let isCheckboxChecked = false;

  function handleCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    isCheckboxChecked = target.checked;
  }

  async function handleDelete(imageUrl: string | undefined) {
    if (!imageUrl) {
      alert("URL gambar tidak valid.");
      return;
    }

    const imageName = imageUrl.split('/').pop()?.split('?')[0];
    const folder = selectedFolder;

    if (!imageName) {
      alert("Nama file tidak ditemukan.");
      return;
    }

    const confirmDelete = confirm(`Apakah kamu yakin ingin menghapus "${imageName}"?`);

    if (confirmDelete) {
      isLoading = true;

      const formData = new FormData();
      formData.append('image', imageName);
      formData.append('folder', folder);

      const response = await fetch('/dashboard/portofolio', {
        method: 'POST',
        headers: {
          'x-http-method-override': 'DELETE',
        },
        body: formData,
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const result = await response.json();
        alert(result.error || 'Gagal menghapus gambar');
      }
      isLoading = false;
    }
  }

  // Fungsi untuk memeriksa ukuran layar
  function checkScreenWidth() {
    if (window.matchMedia("(min-width: 640px)").matches) {
      displayClass = 'block'; 
    } else {
      displayClass = 'hidden'; 
    }
  }

  onMount(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth); 
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  });
</script>

<div class="bg-white max-h-screen w-screen sm:max-w-[1000px] mx-auto">
  <p class="text-left ml-5 sm:ml-6 text-sm md:text-lg font-medium uppercase my-4">Portofolio</p>

  <div class="max-h-[90vh] w-full">
    <div class="bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:rounded-tl-2xl sm:rounded-tr-2xl flex flex-row justify-between">
      <div class="flex flex-row m-3">
        <p class="px-4 sm:px-5 flex text-left py-3">Images</p>
        <select class="bg-transparent justify-center" on:change={handleFolderChange}>
          <option value="1" selected={data.folder === '1'}>Logo</option>
          <option value="2" selected={data.folder === '2'}>Print Media</option>
          <option value="3" selected={data.folder === '3'}>Digital Photo</option>
          <option value="4" selected={data.folder === '4'}>Website Design</option>
        </select>
      </div>
      <div class="flex flex-row gap-2">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2" id="checkbox-select" on:change={handleCheckboxChange}>
          <label for="checkbox-select">SELECT</label>
        </div>
        <form method="post" enctype="multipart/form-data" class="flex relative sm:hidden items-center justify-center w-8 h-8 mt-4 rounded-full bg-[#f28928] hover:bg-[#c97b31] text-white">
          <input type="hidden" name="folder" value={selectedFolder} />
          <button class="w-full h-full">
            <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" name="file" on:change={handleFileChange} />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-[7.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </form>
          
        <form method="post" enctype="multipart/form-data" class="input-images-pc relative hidden sm:flex items-center justify-center h-10 mt-3 mr-3 pr-2 pl-4 bg-[#f28928] hover:bg-[#c97b31] text-white rounded-3xl">
          <input type="hidden" name="folder" value={selectedFolder} />
          <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" name="file" on:change={handleFileChange} />
          <span>Tambah Gambar</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </form>
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-4">
        <svg class="animate-spin h-8 w-8 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <p>Loading...</p>
      </div>
    {/if}

    <div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">
      {#each data.images as image (image)}
      <div class="border w-full sm:w-[300px] h-[230px] sm:h-[200px] mx-auto">
        <div class="w-full h-full overflow-hidden group relative">
          <img src="{image}" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
          {#if isCheckboxChecked}
            <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
              <Fun on:delete={() => handleDelete(image)} />
            </div>
          {/if}
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>
