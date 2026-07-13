// Fungsi menggeser halaman ke arah samping
function nextSlide(pageIndex) {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${pageIndex * 100}vw)`;
}

// Logika Interaksi Tiup Lilin Kue
function blowOutCandle() {
    const candle = document.getElementById('candle');
    const actionZone = document.getElementById('action-zone');
    const instruction = document.getElementById('instruction-text');
    
    // Mengambil elemen audio yang tadi dibuat di HTML
    const song = document.getElementById('birthday-song');

    // Memeriksa jika lilin belum mati
    if (!candle.classList.contains('dead')) {
        candle.classList.add('dead');
        
        // Memutar lagu secara otomatis tepat saat mendeteksi klik lilin
        song.play().catch(error => {
            console.log("Browser memblokir musik otomatis: " + error);
        });
        
        // Mengubah teks petunjuk menjadi romantis
        instruction.innerHTML = "🎉 Lilin berhasil ditiup! Semoga doamu terkabulkan";
        
        // Memunculkan teks berkat dan tombol halaman berikutnya
        setTimeout(() => {
            actionZone.style.display = 'block';
        }, 600);
    }
}

// Jangan hapus fungsi perpindahan halaman dan buka surat yang sudah ada di bawahnya:
function nextSlide(pageIndex) {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${pageIndex * 100}vw)`;
}

function openLetter() {
    const letterBox = document.getElementById('letter-box');
    const secretLetter = document.getElementById('secret-letter');
    letterBox.style.display = 'none';
    secretLetter.style.display = 'block';
}
