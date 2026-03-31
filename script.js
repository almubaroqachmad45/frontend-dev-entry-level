let currentSlide = 0; // Angka penanda kita ada di slide ke berapa (dimulai dari 0)

function moveSlide(direction) {
    const slider = document.querySelector('.slider'); // Mengambil elemen slider
    const slides = document.querySelectorAll('.slide'); // Mengambil semua slide
    const totalSlides = slides.length; // Menghitung ada berapa slide (3)

    // Logika perhitungan slide
    currentSlide += direction;

    // Jika sudah di slide terakhir dan klik 'next', balik ke slide pertama (0)
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    // Jika di slide pertama dan klik 'prev', pergi ke slide terakhir
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // RUMUS GESER: Geser ke kiri sebesar (urutan slide * 100%)
    // Contoh: Slide ke-1 = 1 * 100% = -100% (bergeser ke kiri)
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Ambil elemen yang dibutuhkan
const slidesContainer = document.getElementById("book-slides-container");
const backButton = document.getElementById("slide-arrow-prev");
const forwardButton = document.getElementById("slide-arrow-next");

// Logika saat tombol 'Next' (Kanan) diklik
forwardButton.addEventListener("click", () => {
    // Ambil lebar satu kartu buku
    const slideWidth = slidesContainer.querySelector('.book-card').clientWidth;
    // Geser wadah ke kanan sejauh lebar kartu tersebut
    slidesContainer.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

// Logika saat tombol 'Prev' (Kiri) diklik
backButton.addEventListener("click", () => {
    const slideWidth = slidesContainer.querySelector('.book-card').clientWidth;
    // Geser wadah ke kiri sejauh lebar kartu (angka negatif)
    slidesContainer.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});