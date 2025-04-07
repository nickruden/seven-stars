// СКРИПТ ИНИЦИАЛИЗАЦИИ СЛАЙДЕРА ДЛЯ БЛОКА СТОРИСОВ
const options = {
  skin: "snapgram", // стиль сторис (используется CSS из snapgram.css)
  avatars: true, // Показывать аватарки
  list: false, // Горизонтальный скролл (не вертикальный список)
  rtl: false, // Направление слева направо
  paginationArrows: true, // Стрелки навигации (если много историй)
  paginationArrowSize: 24, // Размер стрелок
  openEffect: true,
  stories: [
    {
      id: "user1",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
      name: "Подпись",
      items: [
        {
          id: "user1Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-1.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
          time: Date.now() / 1000,
        },
        {
          id: "user1Story_2",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user2",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
      name: "Подпись",
      items: [
        {
          id: "user2Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user3",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
      name: "Подпись",
      items: [
        {
          id: "user3Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user4",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
      name: "Подпись",
      items: [
        {
          id: "user4Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-1.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
          time: Date.now() / 1000,
        },
        {
          id: "user4Story_2",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user5",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
      name: "Подпись",
      items: [
        {
          id: "user5Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user6",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
      name: "Подпись",
      items: [
        {
          id: "user6Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user7",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
      name: "Подпись",
      items: [
        {
          id: "user7Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-1.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
          time: Date.now() / 1000,
        },
        {
          id: "user7Story_2",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user8",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
      name: "Подпись",
      items: [
        {
          id: "user8Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user9",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
      name: "Подпись",
      items: [
        {
          id: "user9Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user10",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
      name: "Подпись",
      items: [
        {
          id: "user10Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-1.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-1.jpg",
          time: Date.now() / 1000,
        },
        {
          id: "user10Story_2",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user11",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
      name: "Подпись",
      items: [
        {
          id: "user11Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-2.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
    {
      id: "user12",
      photo: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
      name: "Подпись",
      items: [
        {
          id: "user12Story_1",
          type: "video",
          src: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-2.mp4",
          preview: "https://seven-stars-seven.vercel.app/assets/images/pages/main/reviews/video-img-3.jpg",
          time: Date.now() / 1000,
        },
      ],
    },
  ],
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
  // spaceBetween: 15,
  freeMode: true, // Позволяет слайдам свободно прокручиваться
  watchSlidesProgress: true, // Включает отслеживание прогресса слайдов
  watchSlidesVisibility: true,
  // breakpoints: {
  //   769: {
  //     spaceBetween: 16,
  //   },
  //   991: {
  //     spaceBetween: 18,
  //   },
  // },
});

// Создаем MutationObserver для отслеживания изменений классов
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'class') {
      if (zuckModal.classList.contains('animated')) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        
        const storiesElemts = Array.from(element.querySelectorAll(".story"));
        storiesElemts.forEach((story) => {
          story.classList.add("swiper-slide");
          story.classList.add("my-stories__swiper-slide");
        });

        const storiesSwiper = new Swiper(".my-stories__swiper", {
          direction: "horizontal",
          slidesPerView: "auto",
          // spaceBetween: 15,
          freeMode: true, // Позволяет слайдам свободно прокручиваться
          watchSlidesProgress: true, // Включает отслеживание прогресса слайдов
          watchSlidesVisibility: true,
          // breakpoints: {
          //   769: {
          //     spaceBetween: 16,
          //   },
          //   991: {
          //     spaceBetween: 18,
          //   },
          // },
        });
      }
    }
  }
});

const zuckModal = document.querySelector("#zuck-modal");
// Начинаем наблюдение за изменениями атрибута class у #zuck-modal
observer.observe(zuckModal, { attributes: true });
