// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

import { galleryItems } from './app.js';

const galleryContainer = document.querySelector('.js-gallery');
const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');
const modalRef = document.querySelector('.lightbox');
const modalImgRef = modalRef.querySelector('.lightbox__image');

let isModalOpen = false;

//check if browser support lazy loading
if ('loading' in HTMLImageElement.prototype) {
  galleryContainer.innerHTML = generateGalleryMarkup(galleryItems, true);
} else {
  addLazySizesScript();
  galleryContainer.innerHTML = generateGalleryMarkup(galleryItems);
}

addListeners();

function generateGalleryMarkup(items, hasLazySupport = false) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image lazyload"
      loading="lazy"
      ${hasLazySupport ? 'src="' + preview + '"' : ''}
      ${!hasLazySupport ? 'data-src="' + preview + '"' : ''}
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
    )
    .join('');
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

function addListeners() {
  galleryContainer.addEventListener('click', onGalleryClick);
  modalCloseBtn.addEventListener('click', closeModal);
  modalRef
    .querySelector('.lightbox__overlay')
    .addEventListener('click', closeModal);
  window.addEventListener('keydown', onModalKeydown);
}

function onGalleryClick(e) {
  const element = e.target;
  if (!element.classList.contains('gallery__image')) return;
  e.preventDefault();

  const src = element.dataset?.source;
  openModal(src);
}

function onModalKeydown(event) {
  if (!isModalOpen) return;

  switch (event.code) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowRight':
      nextGallerySrc();
      break;
    case 'ArrowLeft':
      prevGallerySrc();
      break;
  }
}

function getCurrentGallerySrcIndex() {
  return galleryItems.findIndex(item => item.original === modalImgRef.src);
}

function nextGallerySrc() {
  const nextIndex = getCurrentGallerySrcIndex() + 1;
  if (nextIndex < galleryItems.length)
    setModalImgSrc(galleryItems[nextIndex].original);
}

function prevGallerySrc() {
  const prevIndex = getCurrentGallerySrcIndex() - 1;
  if (prevIndex >= 0) setModalImgSrc(galleryItems[prevIndex].original);
}

function setModalImgSrc(src) {
  modalImgRef.src = src;
}

function openModal(src) {
  document.body.classList.add('modal-open');
  modalRef.classList.add('is-open');
  isModalOpen = true;
  setModalImgSrc(src);
}

function closeModal() {
  document.body.classList.remove('modal-open');
  modalRef.classList.remove('is-open');
  isModalOpen = false;
  setModalImgSrc('');
}
