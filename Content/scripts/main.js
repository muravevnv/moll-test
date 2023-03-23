const gallerySlier = new Swiper ('.js-slider-gallery', {
  slidesPerView: 3.5,
  spaceBetween: 10,
})

const heroSlider = new Swiper('.js-slider-hero', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl:'.hero__slide-prev',
    nextEl:'.hero__slide-next'
  }
}) 