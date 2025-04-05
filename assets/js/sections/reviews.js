const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: '.rewiews__swiper-pagination',
    },
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 28,
        }
    }
});