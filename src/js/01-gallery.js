import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems
//    и предоставленному шаблону элемента галереи.
const gallery = document.querySelector(".gallery");

const divList = galleryItems.map((item) => {
  const markup = `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`;

  return markup;
});

const addItem = divList.join("");
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

  // 3. Подключение скрипта и стилей библиотеки модального окна
  //    basicLightbox.Используй CDN сервис jsdelivr и добавь
  //    в проект ссылки на минифицированные(.min) файлы библиотеки.
  // console.log(basicLightbox);
  const largeImageLink = event.target.dataset.source;

  //   5. Замена значения атрибута src элемента <img>
  //      в модальном окне перед открытием.
  const instance = basicLightbox.create(`
    <img src="${largeImageLink}">
`);
  // 4. Открытие модального окна по клику на элементе галереи.
  if (event.target.nodeName === "IMG") {
    console.log(event.target.nodeName);
    // console.log(event.target);
    console.log("Modal window is open");
    console.log(largeImageLink);
    instance.show();
  }
}
