
let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let mountains_front = document.getElementById('mountains_front');
        let header = document.querySelector ('header');


    window.addEventListener('scroll', function (){
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px' ;
        moon.style.top = value * 1.05 + 'px' ;
        mountains_behind.style.top = value * 0.5 + 'px' ;
        mountains_front.style.left = value * 0 + 'px' ;
        text.style.marginRight = value * 3 + 'px' ;
        text.style.marginTop = value * 1.5 + 'px' ;
        btn.style.marginTop = value * 1.5 + 'px' ;
        header.style.top = value * 0.5 + 'px' ; 
    })
    
   // Selecciona todos los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item');

// Selecciona el contenedor del lightbox
const lightbox = document.getElementById('lightbox');

// Selecciona el elemento de imagen dentro del lightbox
const lightboxImg = document.getElementById('lightbox-img');

// Selecciona el elemento de descripción dentro del lightbox
const description = document.getElementById('description');

// Selecciona el botón de cerrar del lightbox
const closeBtn = document.querySelector('.close');

// Selecciona el botón de navegación anterior
const prevBtn = document.querySelector('.prev');

// Selecciona el botón de navegación siguiente
const nextBtn = document.querySelector('.next');

// Variable para rastrear el índice de la imagen actual
let currentIndex = 0;

// Muestra el lightbox con la imagen y descripción de la galería en el índice dado
function showLightbox(index) {
    currentIndex = index; // Actualiza el índice actual
    lightbox.style.display = 'block'; // Muestra el lightbox
    updateLightbox(); // Actualiza el contenido del lightbox
}

// Actualiza el contenido del lightbox con la imagen y descripción actuales
function updateLightbox() {
    const item = galleryItems[currentIndex]; // Obtiene el ítem actual de la galería
    lightboxImg.src = item.querySelector('img').src; // Actualiza la fuente de la imagen en el lightbox
    description.textContent = item.getAttribute('data-description'); // Actualiza la descripción en el lightbox
}

// Cierra el lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Oculta el lightbox
}

// Muestra la imagen anterior en la galería
function showPrev() {
    // Si estamos en la primera imagen, ir a la última; si no, ir a la imagen anterior
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    updateLightbox(); // Actualiza el contenido del lightbox
}

// Muestra la siguiente imagen en la galería
function showNext() {
    // Si estamos en la última imagen, ir a la primera; si no, ir a la siguiente imagen
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    updateLightbox(); // Actualiza el contenido del lightbox
}

// Añade un evento de clic a cada ítem de la galería para mostrar el lightbox cuando se hace clic
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => showLightbox(index));
});

// Añade un evento de clic al botón de cerrar para cerrar el lightbox
closeBtn.addEventListener('click', closeLightbox);

// Añade un evento de clic al botón de navegación anterior para mostrar la imagen anterior
prevBtn.addEventListener('click', showPrev);

// Añade un evento de clic al botón de navegación siguiente para mostrar la imagen siguiente
nextBtn.addEventListener('click', showNext);

// Cierra el lightbox si se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
