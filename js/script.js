//burger
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const itemMenu = document.querySelectorAll('.header__link');

const body = document.body;

if(menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active__menu');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

itemMenu.forEach((e) => {
  e.addEventListener('click', () => {
    if(burger.classList.contains('active')) {
      menu.classList.remove('active__menu');
      burger.classList.remove('active');
      body.classList.remove('lock');
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".mySwiper-spares", {
  slidesPerView: 7,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".mySwiper-main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});