window.screen.height;
window.screen.width;

let windowHeight = window.screen.height
let windowWidth = window.screen.width

console.log(windowHeight, windowWidth)

// Hier wird bestimmt, ob ein Bild hochkant oder Querformat ist, und dann kategorisiert.

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: '', alt: 'Bildbeschreibung 1' },
        { src: 'Marokko/DSC06975.jpg', alt: 'Bildbeschreibung 2' },
    ];

    images.forEach(image => {
        const img = new Image();
        img.onload = function() {
            const isPortrait = img.naturalHeight > img.naturalWidth;
            const container = document.createElement('div');
            container.className = `image-container ${isPortrait ? 'portrait' : 'landscape'}`;
            container.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            gallery.appendChild(container);
        };
        img.src = image.src;
    });
});
