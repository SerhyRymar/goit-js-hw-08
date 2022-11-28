import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
const galleryContainer = document.querySelector(".gallery");


const craetePictureCardsMarkup = galleryItems.map(item =>
      `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    alt="${item.description}"/>
    </a>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', craetePictureCardsMarkup);
let modal = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
