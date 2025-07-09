document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerTop = document.querySelector(".header__mobile-top");
  const headerLinks = document.querySelector(".header__mobile-section-links");
  let lastScrollTop = 0;
  let flag = true;

  // Только для десктопной версии
  if (window.innerWidth > 768) {
    function handleDesktopScroll() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        header.classList.add("fixed");
        header.style.top = "0";
        header.style.transition = "top 0.3s ease";
      } else {
        header.classList.remove("fixed");
      }
    }

    window.addEventListener("scroll", handleDesktopScroll);
  }

  const headerLinksSwiper = new Swiper(".header__links-swiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 8,
    freeMode: true, // Позволяет слайдам свободно прокручиваться
    watchSlidesProgress: true, // Включает отслеживание прогресса слайдов
    watchSlidesVisibility: true,
  });

  function handleScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      if (scrollTop > 95) {
        headerTop.classList.add("hidden");
        headerLinks.classList.add("visible");
      }
    } else {
      if (!flag) {
        headerTop.classList.remove("hidden");
        headerLinks.classList.remove("visible");
        headerTop.classList.add("active");
        headerLinks.classList.add("active");
      }
      if (scrollTop < 95) {
        headerTop.classList.remove("active");
        headerLinks.classList.remove("active");
      }
      headerTop.classList.remove("hidden");
      headerLinks.classList.remove("visible");
      flag = false;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  window.addEventListener("scroll", handleScroll);

  const burgerButton = document.querySelector(".mobile-menu__burger-button");
  const mobileMenu = document.querySelector(".mobile-menu__content");
  const overlay = document.getElementById("burger-menu-overlay");
  const body = document.body;

  burgerButton.addEventListener("click", function () {
    console.log("закрыл");
    const isMenuVisible = mobileMenu.classList.contains("visible");

    if (isMenuVisible) {
      // Закрываем меню
      mobileMenu.classList.remove("visible");
      burgerButton.classList.remove("show");
      overlay.classList.remove("visible");
      body.classList.remove("no-scroll");
    } else {
      // Открываем меню
      mobileMenu.classList.add("visible");
      burgerButton.classList.add("show");
      overlay.classList.add("visible");
      body.classList.add("no-scroll");
    }
  });

  // Закрытие меню при клике на оверлей
  overlay.addEventListener("click", function () {
    console.log("закрыл");
    mobileMenu.classList.remove("visible");
    burgerButton.classList.remove("show");
    overlay.classList.remove("visible");
    body.classList.remove("no-scroll");
  });
});
