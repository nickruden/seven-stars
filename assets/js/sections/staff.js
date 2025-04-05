// СКРИПТ ДЛЯ СЛАЙДЕРА ПО ТИПУ "НАШИ УЧИТЕЛЯ"
document.addEventListener('DOMContentLoaded', function() {
    const staffSections = Array.from(document.querySelectorAll(".staff"));

    staffSections.forEach(section => {
        const sectionId = section.getAttribute("data-staff-type");
        staffSwiperInit(sectionId);
    })

    function staffSwiperInit(id) {
        const staffSwiper = new Swiper(`[data-staff-type=${id}] .staff__swiper`, {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: `[data-staff-type=${id}] .staff__swiper-pagination`,
            },
            navigation: {
                nextEl: `[data-staff-type=${id}] .staff__swiper-button-next`,
                prevEl: `[data-staff-type=${id}] .staff__swiper-button-prev`,
            },
            breakpoints: {
                551: {
                    slidesPerView: 2,
                },
                769: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                }
            }
        });
    }
});