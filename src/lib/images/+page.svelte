<script lang="ts">
  import { selectedFolder } from '$lib/selectedFolder';
  import supabase from '$lib/supabaseClient';
  
  export let data: {
    total: number;
    images: string[];
  };
  
  let images = data.images;
</script>


<div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">
{#each images as image (image)}
  <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
    <div class="w-full h-full overflow-hidden group relative">
      <img src="{image}" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
      <!-- Checkbox Img -->

    </div>
  </div>
  {/each}
</div>