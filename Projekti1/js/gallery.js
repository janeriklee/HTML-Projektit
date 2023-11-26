// Array of image sources
var images = [
    'tulossa1.png',
    'tulossa2.png',
];

var currentIndex = 0;

// Function to display the current image
function showImage() {
    document.getElementById('galleryImage').src = images[currentIndex];
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
    updateButtonStyles();
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
    updateButtonStyles();
}

// Initial display
window.onload = function () {
    showImage();
    updateButtonStyles();
};