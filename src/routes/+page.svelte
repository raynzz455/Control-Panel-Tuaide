<script>
    import "../app.css";
    import { goto } from '$app/navigation';

    async function handleRedirect() {
       await goto('/dashboard');
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
    
    .logo {
        opacity: 0;
        transform: translateY(100px); 
        animation: fadeIn 1s forwards;
        animation-delay: 0.5s;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0); 
        }
    }

    .button {
        opacity: 0;
        transform: scale(0);
        animation: popIn 0.5s forwards;
        animation-delay: 1.5s; 
        padding: 16px 24px; /* Padding untuk tombol */
        font-size: 1.2rem; /* Ukuran font default */
        border-radius: 10px; /* Border radius yang lebih halus */
        cursor: pointer; /* Pointer saat hover */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Transisi untuk efek hover */
        margin-top: 12px; /* Margin atas untuk tombol */
    }

    @keyframes popIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .button:hover {
        background-color: #f47c19; /* Warna latar saat hover */
        transform: scale(1.05); /* Sedikit membesar saat hover */
    }

    .button:active {
        transform: scale(0.95); /* Sedikit mengecil saat diklik */
    }

    @media (min-width: 640px) { /* Untuk ukuran sm */
        .button {
            font-size: 1.2rem; /* Ukuran font tetap sama */
            margin-top: 20px;
            padding: 8px 10px; /* Margin atas yang diinginkan */
        }
    }
</style>

<body>
    <div class="content">
        <div class="mx-auto justify-center w-[320px] h-[200px] mb-[10px]">
            <img src="/images/logo.png" alt="logo-gambar-ceuanh" class="logo w-full h-full object-cover">
        </div>
        <button on:click={handleRedirect} class="button text-white bg-[#f48927]">
            Let's Go !
        </button>
    </div>
</body>
