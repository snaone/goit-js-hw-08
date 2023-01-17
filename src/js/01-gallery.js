// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const newGallery = createElement(galleryItems);


galleryEl.insertAdjacentHTML('afterbegin', newGallery);

function createElement(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
            <a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            </a>
            </div>
        `;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {

     captions: true,
     captionSelector: 'img',
     captionType: 'attr',
     captionsData: 'alt',
     captionDelay: 250,
     preloading: true,
     captionPosition: 'bottom',
    });