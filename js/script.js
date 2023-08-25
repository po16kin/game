var swiper = new Swiper(".slide-container", {
  slidesPerView:1,
  spaceBetween: 20,
  sliderPerGroup: 1,
 
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
	1125: {
      slidesPerView: 3,
    },
	1350: {
      slidesPerView: 3,
    },
    1575: {
      slidesPerView: 4,
    },
	1700: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".slide-container2", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 1,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
     0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
	1125: {
      slidesPerView: 3,
    },
	1350: {
      slidesPerView: 3,
    },
    1575: {
      slidesPerView: 4,
    },
	1700: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".slide-container3", {
  slidesPerView: 1,
  spaceBetween: 0,
  sliderPerGroup: 1,
  autoplay:{
	delay: 3000,
    },
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});