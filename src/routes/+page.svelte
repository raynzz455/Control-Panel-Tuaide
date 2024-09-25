<script>
    import "../app.css";
    import { goto } from '$app/navigation';

    function handleRedirect() {
        goto('/dashboard');
    }

    export { handleRedirect };
</script>

<style>
    body {
        margin: 0;
    }
    .content {
        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
    }
</style>

<body>
    <div class="content">
        <div class="mx-auto justify-center w-[320px] h-[200px] mb-[10px]">
            <img src="/images/logo.png" alt="logo-gambar-ceuanh" class="w-full h-full object-cover">
        </div>
        <button on:click={handleRedirect} class="w-[110px] p-3 font-bold text-md text-white bg-[#f48927] rounded-xl">
            Let's Go !
        </button>
    </div>
</body>
