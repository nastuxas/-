const swiperMovies = new Swiper('.movies', {
  slidesPerView: 4,
      spaceBetween: 80,
loop: true,

  navigation: {
    nextEl: '.main-slider-film_arrow',
    prevEl: '.main-slider-film_arrowleft',
  },

});

const swiperSerials = new Swiper('.series', {
  slidesPerView: 4,
      spaceBetween: 80,
loop: true,

  navigation: {
    nextEl: '.main-slider-series_arrow',
    prevEl: '.main-slider-series_arrowleft',
  },

});

const swiperCartoons = new Swiper('.cartoons ', {
  slidesPerView: 4,
      spaceBetween: 80,
loop: true,

  navigation: {
    nextEl: '.main-slider-cartoons_arrow',
    prevEl: '.main-slider-cartoons_arrowleft',
  },

});

const swiperActors = new Swiper('.actors', {
  slidesPerView: 4,
      spaceBetween: 80,
loop: true,

  navigation: {
    nextEl: '.main-slider-actor_arrow',
    prevEl: '.main-slider-actor_arrowleft',
  },

});