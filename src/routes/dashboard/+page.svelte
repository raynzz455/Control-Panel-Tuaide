<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  export let data: { total: number; imageUrls: string[] };
  let currentIndex = 0;
  let currentImage = '';
  let isVisible = true;

  const updateImage = () => {
    currentIndex = (currentIndex + 1) % data.imageUrls.length;
    currentImage = data.imageUrls[currentIndex];
    isVisible = true;
  };

  onMount(() => {
    if (data.imageUrls.length > 0) {
      currentImage = data.imageUrls[currentIndex];
      const interval = setInterval(() => {
        isVisible = false; 
        setTimeout(updateImage, 300); 
      }, 10000); 

      return () => clearInterval(interval);
    }
  });

  const handlePortfolioClick = async (event: MouseEvent) => { 
    event.preventDefault();
    await goto('/dashboard/portofolio'); 
  };

  const handleTestimonialClick = async (event: MouseEvent) => { 
    event.preventDefault();
    await goto('/dashboard');
  };

  const handleDashboardHover = async () => {
    // Prefetch data for the dashboard
    await fetch('/dashboard'); // Assuming this endpoint fetches relevant data
  };
</script>

<body class="bg-white">
  <div class="max-h-screen w-screen md:max-w-[1000px] md:max-h-[500px] mx-auto">
    <div class="content md:mt-10 sm:flex">
      <button
        on:click={handlePortfolioClick}
        on:mouseenter={handleDashboardHover}  
        class="flex flex-row w-full h-[200px] mb-5 md:h-[300px] p-4 sm:flex-col sm:w-1/2"
        aria-label="Go to Portfolio"
      >
        <div class="relative w-full bg-white shadow-[5px_5px_0px_black] rounded-lg border-2 border-black">
          <div class="flex flex-row h-[200px] md:h-[260px]">
            <div class="w-[25%] flex flex-col justify-between py-6 md:px-2 md:pt-8 md:pb-10">
              <h2 class="text-md font-bold text-center">Portofolio</h2>
              <h3 class="text-md font-semibold text-center">Total:</h3>
              <p class="text-lg font-bold text-center">{data.total}</p>
            </div>
            <div class="w-[75%] py-2 pr-2">
              <img 
                src={currentImage} 
                alt="Gambar Portofolio" 
                class="object-cover h-full w-full mx-auto transition-opacity duration-300"
                class:opacity-0={!isVisible} 
                class:opacity-100={isVisible} 
                on:transitionend={() => { if (!isVisible) isVisible = false; }}
              />
            </div>
          </div>
        </div>
      </button>

      <button 
        on:click={handleTestimonialClick} 
        on:mouseenter={handleDashboardHover}  
        class="flex flex-row w-full h-[200px] md:h-[300px] p-4 sm:flex-col sm:w-1/2"
        aria-label="Go to Testimonials"
      >
        <div class="relative w-full bg-white shadow-[5px_5px_0px_black] rounded-lg">
          <div class="absolute inset-0 flex items-center justify-center text-9xl font-bold text-gray-300 opacity-0 hover:opacity-100 transition duration-300">
            2
          </div>
          <div class="flex flex-row h-[200px] md:h-[260px]">
            <div class="w-[25%] flex flex-col justify-between py-6 md:px-2 md:pt-8 md:pb-10">
              <h2 class="text-md font-bold text-center">Testimoni</h2>
              <h3 class="text-md font-semibold text-center">Total:</h3>
              <p class="text-lg font-bold text-center">123</p>
            </div>
            <div class="w-[75%] py-2 pr-2">
              <img src="/images/logo.png" alt="Testimonial Text" class="object-cover h-full w-full mx-auto" />
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</body>

<style>
  img {
    transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity */
  }
</style>
