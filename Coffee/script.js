
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

const showClass = "show-mobile-menu";

// Open menu
if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle(showClass);
  });
}

// Close menu
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove(showClass);
  });
}

// Initialize swiper
const swiper = new Swiper('.slider-wrapper',{
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need Pagination
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints:{
    0:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }
});