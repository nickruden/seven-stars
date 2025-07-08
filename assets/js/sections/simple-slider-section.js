// СКРИПТ ДЛЯ ПРОСТОГО СЛАЙДЕРА
document.addEventListener('DOMContentLoaded', function() {
    const staffSections = Array.from(document.querySelectorAll(".simple-slider-section"));

    staffSections.forEach(section => {
        const sectionId = section.getAttribute("data-simpleSlider-id");
        staffSwiperInit(sectionId);
    })

    function staffSwiperInit(id) {
        const isWrap = document.querySelector(`.simple-slider-section.--desktopMode-wrap[data-simpleSlider-id="${id}"]`) !== null;

        const staffSwiper = new Swiper(`[data-simpleSlider-id=${id}] .simple-slider-section__swiper`, {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: `[data-simpleSlider-id=${id}] .simple-slider-section__swiper-pagination`,
            },
            navigation: {
                nextEl: `[data-simpleSlider-id=${id}] .simple-slider-section__swiper-button-next`,
                prevEl: `[data-simpleSlider-id=${id}] .simple-slider-section__swiper-button-prev`,
            },
            breakpoints: {
                551: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    simulateTouch: true,
                    allowTouchMove: true,
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    simulateTouch: true,
                    allowTouchMove: true,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: isWrap ? 0 : 24,
                    allowTouchMove: isWrap ? false : true,
                }
            }
        });
    }
});