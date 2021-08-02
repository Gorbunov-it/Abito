var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper-container", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
