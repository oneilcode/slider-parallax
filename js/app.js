const sliderMain = new Swiper('.slider_main', {
   freeMode: true,
   mousewheel: true,
   parallax: true,
   centerSlides: true,
   breakpoints: {
      0: {
         slidesPerView: 2.5,
         spaceBetween: 20
      },
      680: {
         slidesPerView: 3.5,
         spaceBetween: 60
      }
   }
})

const sliderBg = new Swiper('.slider_bg', {
   parallax: true,
   centerSlides: true,
   spaceBetween: 60,
   slidesPerView: 3.5
})

sliderMain.controller.control = sliderBg

let mainSection = document.querySelector('.main')

sliderMain.on('slideChange', e => {
   sliderMain.activeIndex > 0 ? mainSection.classList.add('hidden') : mainSection.classList.remove('hidden')
})