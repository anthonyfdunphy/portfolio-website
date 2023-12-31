function openInstagram() {
    window.open('https://www.instagram.com/anthonya_d/');
}

// Second Carousel Functions

// Initialize the currentIndex_1 variable
let currentIndexOum = 0;

// Retrieve all the images for the second carousel
const imagesOum = document.querySelectorAll('.carousel-oum img');

// Function to update the carousel position for the second carousel
function updateCarouselOum() {
    const size_1 = imagesOum[0].clientWidth;
    document.querySelector('.carousel-oum').style.transform = 'translateX(' + (-size_1 * currentIndexOum) + 'px)';
}

// Function to move to the next image in the second carousel
function nextImageOum() {
    currentIndexOum = (currentIndexOum + 1) % imagesOum.length;
    updateCarouselOum();
}

// Function to move to the previous image in the second carousel
function prevImageOum() {
    currentIndexOum = (currentIndexOum - 1 + imagesOum.length) % imagesOum.length;
    updateCarouselOum();
}

// Initialize the second carousel position
updateCarouselOum();

