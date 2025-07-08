document.querySelectorAll(".double-slider").forEach((doubleSlider) => {
  const doubleSliderId = doubleSlider.getAttribute("data-doubleSlider-id");

  const textSlider = doubleSlider.querySelector(".double-slider__text-slider");
  const textSwiperContainer = doubleSlider.querySelector(
    ".double-slider__text-swiper"
  );
  const textSwiperPagination = doubleSlider.querySelector(
    ".double-slider__text-swiper-pagination"
  );
  const textSwiperNext = doubleSlider.querySelector(
    ".double-slider__text-swiper-button-next"
  );
  const textSwiperPrev = doubleSlider.querySelector(
    ".double-slider__text-swiper-button-prev"
  );

  const imageSliders = doubleSlider.querySelectorAll(
    ".double-slider__image-slider"
  );
  const imageSwipers = [];

  // Инициализация image sliders
  imageSliders.forEach((slider) => {
    const dataId = slider.getAttribute("data-imageSlider-id");
    const swiperContainer = slider.querySelector(
      ".double-slider__image-swiper"
    );
    const paginationContainer = slider.querySelector(
      ".double-slider__image-swiper-pagination"
    );

    const swiper = new Swiper(swiperContainer, {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: paginationContainer,
      },
    });

    // Сохраняем связь
    imageSwipers.push({ dataId, slider });

    // Скрываем все image-слайдеры по умолчанию
    slider.style.display = "none";
  });

  // Функция показа нужного image slider
  function showImageSlider(activeSlideId) {
    imageSwipers.forEach((imageSwiper) => {
      if (imageSwiper.dataId === activeSlideId) {
        imageSwiper.slider.style.removeProperty("display"); // Показываем
      } else {
        imageSwiper.slider.style.display = "none"; // Скрываем остальные
      }
    });
  }

  // Автоматическая корректировка высоты под активный слайд
  function updateSwiperHeight(swiperInstance) {
    if (window.innerWidth <= 991) {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      if (activeSlide && activeSlide.firstElementChild) {
        const slideHeight = activeSlide.firstElementChild.offsetHeight;
        textSlider.style.height = `${slideHeight}px`;
      }
    } else {
      textSlider.style.height = ""; // Убираем высоту при десктопе
    }
  }

  // Инициализация текстового слайдера
  const textSwiper = new Swiper(textSwiperContainer, {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: textSwiperPagination,
      type: "fraction",
      formatFractionCurrent: (number) => ("0" + number).slice(-2),
      formatFractionTotal: (number) => ("0" + number).slice(-2),
      renderFraction: (currentClass, totalClass) => {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          "/" +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    navigation: {
      nextEl: textSwiperNext,
      prevEl: textSwiperPrev,
    },
    on: {
      init: function () {
        if (this.slides.length <= 1) {
          // Скрыть пагинацию
          if (textSwiperPagination) {
            textSwiperPagination.style.display = "none";
          }

          // Добавить класс, если один слайд
          doubleSlider.classList.add("--single-slide");
        }
        updateSwiperHeight(this);
        showImageSlider(this.slides[this.activeIndex].id);
      },
      slideChange: function () {
        updateSwiperHeight(this);
        showImageSlider(this.slides[this.activeIndex].id);
      },
      resize: function () {
        updateSwiperHeight(this);
      },
    },
  });
});
