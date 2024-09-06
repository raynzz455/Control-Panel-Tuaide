<script lang="ts">
  import { onMount } from 'svelte';
  import Fun from '$lib/components/Delup.svelte'
  import { goto } from '$app/navigation';

export let data: { images: string[], folder: string };

let selectedFolder = data.folder || '1';

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
</script>

<div class="bg-white max-h-screen w-screen sm:max-w-[1000px] mx-auto">
  <p class="text-left ml-5 sm:ml-6 text-sm md:text-lg font-medium uppercase my-4">Portofolio</p>
  <div class="max-h-[90vh] w-full">
    <!-- Header -->
    <div class="bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3 sm:rounded-tl-2xl sm:rounded-tr-2xl flex flex-row justify-between">
      <div class="flex flex-row">
        <p class="px-4 sm:px-5 flex text-left py-3">Images</p>
        <select class="bg-transparent justify-center " on:change={handleFolderChange}>
          <option value="1" selected={data.folder === '1'}>Logo</option>
          <option value="2" selected={data.folder === '2'}>Print Media</option>
          <option value="3" selected={data.folder === '3'}>Digital Photo</option>
          <option value="4" selected={data.folder === '4'}>Website Design</option>
        </select>
      </div>
      <div class="flex flex-row gap-2">
        <!-- Checkbox Select -->
        <div class="flex items-center pb-2">
          <input type="checkbox" class="mr-2" id="checkbox-select" on:change={handleCheckboxChange}>
          <label for="checkbox-select">SELECT</label>
        </div>        
            <!-- Form untuk button pertama -->
            <form method="post" enctype="multipart/form-data" class="flex relative sm:hidden items-center justify-center w-8 h-8 rounded-full bg-[#f28928] hover:bg-[#c97b31] text-white">
              <input type="hidden" name="folder" value={selectedFolder} />
              <button class="w-full h-full">
                <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" name="file" on:change={handleFileChange} />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </form>

            <!-- Form untuk button kedua -->
            <form method="post" enctype="multipart/form-data" class="hidden relative sm:block sm:flex items-center justify-center pr-2 pl-4 bg-[#f28928] hover:bg-[#c97b31] text-white rounded-3xl">
              <input type="hidden" name="folder" value={selectedFolder} />
                <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" name="file" on:change={handleFileChange} />
                <span>Tambah Gambar</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </form>
            
      </div>
    </div>
    <!-- Images -->
    <div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">
      {#each data.images as image (image)}      
      <div class="border w-full sm:w-[300px] h-[230px] sm:h-[200px] mx-auto">
        <div class="w-full h-full overflow-hidden group relative">
          <img src="{image}" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
          <!-- Checkbox Img -->
        {#if isCheckboxChecked}
        <Fun />
      {/if}
        </div>
      </div>
      {/each}

    </div>

  </div>
</div>
