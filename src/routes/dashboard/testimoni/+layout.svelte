<script lang="ts">
    export let komentar_uhuy: { [id: string]: { komentar: string; nama_customer: string; keterangan_customer: string } };

    // Memeriksa dan mencetak komentar di console
    console.log('Komentar Uhuy di layout:', komentar_uhuy);
</script>

<!-- Menggunakan slot untuk menampilkan konten halaman -->
<slot {komentar_uhuy} />
