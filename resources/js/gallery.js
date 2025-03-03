let angle = 0;
const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let autoRotate = setInterval(() => rotateGallery(-72), 5000); // Auto-rotate every 3s

// Function to rotate gallery
function rotateGallery(deg) {
    angle += deg;
    carousel.style.transform = `rotateY(${angle}deg)`;
}

// Manual Controls
nextBtn.addEventListener('click', () => {
    rotateGallery(-72);
    resetAutoRotate();
});

prevBtn.addEventListener('click', () => {
    rotateGallery(72);
    resetAutoRotate();
});

// Pause auto-rotation on hover
document.querySelector('.gallery-container').addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
});

document.querySelector('.gallery-container').addEventListener('mouseleave', () => {
    autoRotate = setInterval(() => rotateGallery(-72), 5000);
});

// Touch & Mouse Drag Controls
let startX = 0;
let isDragging = false;

document.querySelector('.gallery-container').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.querySelector('.gallery-container').addEventListener('mouseup', (e) => {
    if (isDragging) {
        let diff = startX - e.clientX;
        if (diff > 50) rotateGallery(-72);
        else if (diff < -50) rotateGallery(72);
        resetAutoRotate();
    }
    isDragging = false;
});

document.querySelector('.gallery-container').addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

document.querySelector('.gallery-container').addEventListener('touchend', (e) => {
    if (isDragging) {
        let diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) rotateGallery(-72);
        else if (diff < -50) rotateGallery(72);
        resetAutoRotate();
    }
    isDragging = false;
});

// Reset Auto-Rotation Timer on Manual Interaction
function resetAutoRotate() {
    clearInterval(autoRotate);
    autoRotate = setInterval(() => rotateGallery(-72), 5000);
}


// function for creating floating particles 

function createParticles() {
    const particleContainer = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
        let particle = document.createElement('span');
        let size = Math.random() * 5 + 2;
        let positionX = Math.random() * window.innerWidth;
        let duration = Math.random() * 5 + 3;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${positionX}px`;
        particle.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(particle);
    }
}

// Generate particles on load
createParticles();
