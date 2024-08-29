<script>
	import "../app.css"
	import { goto } from '$app/navigation'; //
	function handleImageClick() {
	goto('/dashboard');
	}
	export { handleImageClick };
</script>

<div class="mx-auto justify-center">
	<button on:click={handleImageClick}>
		<img src="/images/logo.png" alt="logo-gambar-ceuanh" class=" lg:w-[60%] h-[60%] mx-auto">
	</button>
</div>

		

		

