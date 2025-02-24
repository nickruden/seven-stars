document.addEventListener('DOMContentLoaded', function() {
    const headerTop = document.querySelector('.header__mobile-top');
    const headerLinks = document.querySelector('.header__mobile-section-links');
    let lastScrollTop = 0;
    let flag = true;

    const headerLinksSwiper = new Swiper('.header__links-swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true, // Позволяет слайдам свободно прокручиваться
        watchSlidesProgress: true, // Включает отслеживание прогресса слайдов
        watchSlidesVisibility: true,
    });

    function handleScroll() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log(document.documentElement.scrollTop)

        if (scrollTop > lastScrollTop) {
            if (scrollTop > 95) {
                headerTop.classList.add('hidden');
                headerLinks.classList.add('visible');
            }
        } else {
            if (!flag) {
                headerTop.classList.remove('hidden');
                headerLinks.classList.remove('visible');
                headerTop.classList.add('active');
                headerLinks.classList.add('active');
            }
            headerTop.classList.remove('hidden');
            headerLinks.classList.remove('visible');
            flag = false;
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        console.log(1, lastScrollTop)
    }

    window.addEventListener('scroll', handleScroll);

});