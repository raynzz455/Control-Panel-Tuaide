<script>
	import "../app.css"
	import { goto } from '$app/navigation'; //
	function handleImageClick() {
	goto('/dashboard');
	}
	export { handleImageClick };
</script>

<div class="mx-auto justify-center w-[400px] h-[350px]">
	<button on:click={handleImageClick}>
		<img src="/images/logo.png" alt="logo-gambar-ceuanh" class=" w-full h-full mx-auto">
	</button>
</div>

		

		

