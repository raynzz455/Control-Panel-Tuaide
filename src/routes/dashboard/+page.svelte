<script lang="ts">
	import { goto } from '$app/navigation'; //
	function PortoflioPath() {
	goto('/dashboard/portofolio');
	}
	export { PortoflioPath};
	function TestimonialPath() {
	goto('/dashboard/testimoni');
	}
	export { TestimonialPath};

    export let data: { total: number, firstImageUrl: string };	
</script>
<body class="bg-white">
	<div class="max-h-screen w-screen md:max-w-[1000px] md:max-h-[500px] mx-auto">
		<div class="content md:mt-10 sm:flex">

			<button on:click={PortoflioPath} class="flex flex-row w-full h-[200px] mb-5 md:h-[300px] p-4 sm:flex-col sm:w-1/2">
				<div class="relative w-full bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300">
					<div class="absolute inset-0 flex items-center justify-center text-9xl font-bold text-gray-300 opacity-0 hover:opacity-100 transition duration-300">
						1
					</div>
					<div class="flex flex-row h-[200px] md:h-[260px]">
						<div class="w-[25%] flex flex-col justify-between py-6 md:px-2 md:pt-8 md:pb-10">
							<div>
							  <h2 class="text-md font-bold text-center">Portofolio</h2>
							</div>
							<div>
							  <h3 class="text-md font-semibold text-center">Total:</h3>
							  <p class="text-lg font-bold text-center">{data.total}</p>
							</div>
						  </div>
						<div class="w-[75%] py-2 pr-2">
							<img src={data.firstImageUrl} alt="gambar pertama" class="object-cover h-full w-full mx-auto">
						</div>
					  </div>
					</div>
				</button>
			  
			  <button on:click={TestimonialPath} class="flex flex-row w-full h-[200px] md:h-[400px] p-4 sm:flex-col sm:w-1/2">
				<div class="relative w-full bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300">
				  <div class="absolute inset-0 flex items-center justify-center text-9xl font-bold text-gray-300 opacity-0 hover:opacity-100 transition duration-300">
					1
				  </div>
				  <div class="flex flex-row h-[200px] md:h-[260px]">
					<div class="w-1/3 flex flex-col justify-between p-2 border-r border-gray-300">
						<div>
						  <h2 class="text-xl font-bold text-center">Portofolio</h2>
						</div>
						<div>
						  <h3 class="text-lg font-semibold text-center">Total:</h3>
						  <p class="text-2xl font-bold text-center">123</p>
						</div>
					  </div>
					<div class="w-2/3 p-2">
					  <img src="/images/logo.png" alt="suki" class="object-cover h-full w-full mx-auto ">
					</div>
				  </div>
				</div>
			  </button>
		</div>

	</div>

</body>
