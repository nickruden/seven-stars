// СКРИПТ ИНИЦИАЛИЗАЦИИ СЛАЙДЕРА ДЛЯ БЛОКА СТОРИСОВ
const options = {
  skin: "snapgram", // стиль сторис (используется CSS из snapgram.css)
  avatars: true, // Показывать аватарки
  list: false, // Горизонтальный скролл (не вертикальный список)
  rtl: false, // Направление слева направо
  paginationArrows: true, // Стрелки навигации (если много историй)
  paginationArrowSize: 24, // Размер стрелок
  localStorage: true,
  stories: [
    {
      id: "john_doe",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe212",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe29",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe294",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe293",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe292",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe28",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe27",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe26",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe25",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe24",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe32",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "john_doe22",
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Подпись",
      items: [
        {
          id: "john_1",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=1",
          preview: "https://picsum.photos/200/400?random=1",
          time: Date.now() / 1000,
        },
        {
          id: "john_2",
          type: "photo",
          src: "https://picsum.photos/800/1600?random=2",
          preview: "https://picsum.photos/200/400?random=2",
          time: Date.now() / 1000,
        },
      ],
    },
    // другие сторис...
  ],
  backNative: true,
  backButton: true,
  previousTap: true,
  localStorage: true,
}; // See ./src/options.ts

const element = document.querySelector("#stories");
const storiesInit = Zuck(element, options);

const storiesElemts = Array.from(element.querySelectorAll(".story"));
storiesElemts.forEach((story) => {
  story.classList.add("swiper-slide");
  story.classList.add("my-stories__swiper-slide");

  const storySlide = story.querySelector(".item-link");

  storySlide.classList.add("my-stories__slide");
  storySlide.querySelector(".name").classList.add("my-stories__title");
});

const storiesSwiper = new Swiper(".my-stories__swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 15,
  freeMode: true, // Позволяет слайдам свободно прокручиваться
  watchSlidesProgress: true, // Включает отслеживание прогресса слайдов
  watchSlidesVisibility: true,
  breakpoints: {
    769: {
      spaceBetween: 16,
    },
    991: {
      spaceBetween: 18,
    },
  },
});
