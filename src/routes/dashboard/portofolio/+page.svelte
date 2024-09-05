<script lang="ts">
    import { goto } from '$app/navigation';

    export let data: { images: string[], folder: string };

    function handleFolderChange(event: Event) {
      const target = event.target as HTMLSelectElement;
      const selectedFolder = target.value;
      goto(`?folder=${selectedFolder}`);
    }
</script>

<div class="bg-white max-h-screen w-screen sm:max-w-[1000px] mx-auto">
  <p class="text-left ml-5 sm:ml-6 text-sm md:text-lg font-medium uppercase my-4">Portofolio</p>
  <div class="max-h-[90vh] w-full">
    <!-- Header -->
    <div class="bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3 sm:rounded-tl-2xl sm:rounded-tr-2xl flex flex-row justify-between">
      <div class="flex flex-row">
        <p class="px-4 sm:px-5 flex text-left py-3">Images</p>
        <select class="bg-transparent justify-center" on:change={handleFolderChange}>
          <option value="1" selected={data.folder === '1'}>1</option>
          <option value="2" selected={data.folder === '2'}>2</option>
          <option value="3" selected={data.folder === '3'}>3</option>
          <option value="4" selected={data.folder === '4'}>4</option>
        </select>
      </div>
      <div class="flex flex-row gap-2">
        <!-- Checkbox Select -->
        <div class="flex items-center pb-2">
          <input type="checkbox" class="mr-2" id="checkbox-select">
          <label for="checkbox-select">SELECT</label>
        </div>
        <button class="flex relative sm:hidden items-center justify-center w-8 h-8 rounded-full bg-[#f28928] hover:bg-[#c97b31] text-white">
          <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button class="hidden relative sm:block sm:flex items-center justify-center pr-2 pl-4 bg-[#f28928] hover:bg-[#c97b31] text-white rounded-3xl">
          <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" />
          <span>Tambah Gambar</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Images -->
    <div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">
      {#each data.images as image (image)}      
      <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
        <div class="w-full h-full overflow-hidden group relative">
          <img src="{image}" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
          <!-- Checkbox Img -->

        </div>
      </div>
      {/each}

    </div>

  </div>
</div>
