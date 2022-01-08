import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems
//    и предоставленному шаблону элемента галереи.
//    Используй готовый код из первого задания.
const gallery = document.querySelector(".gallery");

const links = galleryItems.map((item) => {
  const markup = `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" title="${item.description}"/></a>`;

  return markup;
});

const addItem = links.join("");
// console.log(addItem);

gallery.insertAdjacentHTML("afterbegin", addItem);
console.log(gallery);

// 2. Реализация делегирования на div.gallery
//    и получение url большого изображения.

gallery.addEventListener("click", onClick);

function onClick(event) {
  // Запрет на перенаправление на другую страницу
  // при клике на картинку
  event.preventDefault();

  const largeImageLink = event.target.dataset.source;

  // 4. Открытие модального окна по клику на элементе галереи.
  if (event.target.nodeName === "IMG") {
    console.log(event.target.nodeName);
    // console.log(event.target);
    console.log("Modal window is open");
    console.log(largeImageLink);
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionClass: "center",
  captionPosition: "bottom",
  captionDelay: 250,
});
