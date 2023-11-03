import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

export const gallery = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems
  .map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
  )
  .join(``);
gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains(`gallery__image`)) {
    lightbox.open(
      galleryItems.findIndex(item => item.preview === event.target.src)
    );
  }
}
