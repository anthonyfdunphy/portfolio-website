function openInstagram() {
    window.open('https://www.instagram.com/anthony_dunphy_/');
}

function goBack() {
    window.history.go(-1);
}

// First Carousel Functions
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function updateCarousel() {
    const size = images[0].clientWidth;
    document.querySelector('.carousel').style.transform = 'translateX(' + (-size * currentIndex) + 'px)';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

updateCarousel(); // Initialize
