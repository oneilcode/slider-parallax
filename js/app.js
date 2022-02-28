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

document.querySelectorAll('.slider__item').forEach(item => {
   item.addEventListener('click', event => {
      item.classList.toggle('opened')
   })
})

let main = document.querySelector('.main')
sliderMain.on('slideChange', e => {
   sliderMain.activeIndex > 0 ? main.classList.add('hidden') : main.classList.remove('hidden')
})