var mainSwiper = new Swiper ('#main-swiper', {
  // Optional parameters
  direction: 'vertical',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,    

  //Slides on page
  slidesPerView: 1,
})

var introSwiper = new Swiper ('.internal-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: false,    

  //Slides on page
  slidesPerView: 2,
  breakpoints: {
    768: {
        slidesPerView: 1,
        centeredSlides: true,
    },
  },
})

