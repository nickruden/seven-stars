document.addEventListener('DOMContentLoaded', function() {
    const headerTop = document.querySelector('.header__mobile-top');
    const headerLinks = document.querySelector('.header__mobile-section-links');
    let lastScrollTop = 0;

    function handleScroll() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log(document.documentElement.scrollTop)

        if (scrollTop > lastScrollTop) {
            // Скролл вниз
            if (scrollTop > 95) {
                headerTop.classList.add('hidden');
                headerLinks.classList.add('visible');
            }
        } else {
                headerTop.classList.remove('hidden');
                headerLinks.classList.remove('visible');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        console.log(1, lastScrollTop)
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('touchmove', handleScroll);
});