<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
  
    export let data: PageData;
  
    // Placeholder function for the dropdown change event
    function handleFolderChange(event: Event) {
      const target = event.target as HTMLSelectElement;
      const selectedFolder = target.value;
      window.location.href = `/images?folder=${selectedFolder}`;
    }
  
    onMount(() => {
      // Optionally handle initial setup here
    });
  </script>
  
  <select on:change={handleFolderChange} class="bg-transparent justify-center">
    <option value="1" selected>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  
  <div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">
    {#each data.images as image}
      <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
        <div class="w-full h-full overflow-hidden group relative">
          <img src={image} alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
          <!-- Checkbox Img -->
          <div class="checkbox-img absolute bottom-4 left-4 items-center justify-center z-50">
            <input type="checkbox" class="w-5 h-5 rounded-full bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <label for="checkbox-img"></label>
          </div>
          <!-- Button Img -->
          <div class="absolute bottom-1 right-1 w-1/4 h-full z-70 flex flex-col items-center justify-center gap-4 bg-gray-500 bg-opacity-40">
            <!-- Buttons for actions -->
            <!-- Example buttons: Edit, Delete, Download -->
          </div>
        </div>
      </div>
    {/each}
  </div>
  