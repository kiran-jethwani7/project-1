const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image paths as needed
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex];
    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById('modalImage').src = images[currentIndex];
}