var swiper = new Swiper(".swiper1", {
  loop: true,
  // loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 화면 넓이가 320이상일 때
    320: {
      slidesPerView: 1,
    },
    //화면 넓이가 960이상일 때
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".swiper2", {
  autoplay: {
    delay: 3000,
    loop: true,
    loopAdditionalSlides: 1,
  },
  loopedSlides: 5,
  slidesPerView: 1,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 화면 넓이가 768이상일 때
    768: {
      allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    //화면 넓이가 960이상일 때
    960: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
