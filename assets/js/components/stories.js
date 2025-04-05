// СКРИПТ ИНИЦИАЛИЗАЦИИ СЛАЙДЕРА ДЛЯ БЛОКА СТОРИСОВ
const reviewsSwiper = new Swiper('.stories__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
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
        }
    }
});