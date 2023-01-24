  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.nav__list')

  burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav__list--active');

    document.body.classList.toggle('stop-scroll');
  }
)

  const swiperWr = document.getElementById('swiper')
  const bulletsContainer = document.createElement('div')
  const fraction = document.createElement('div')

  const fractionCurrent = document.createElement('span')
  const fractionTotal = document.createElement('span')

  fraction.classList.add('fraction-container')
  fractionCurrent.classList.add('swiper-pagination-current')
  fractionCurrent.id = ('fractionCurrent')
  fractionTotal.classList.add('swiper-pagination-total')

  bulletsContainer.classList.add('custom-bullets')
  swiperWr.append(bulletsContainer)
  swiperWr.append(fraction)
  fraction.append(fractionCurrent)
  fraction.append('/')
  fraction.append(fractionTotal)

  fractionCurrent.textContent = 1
  fractionTotal.textContent = document.querySelectorAll('.swiper-slide').length

  const slides = document.querySelectorAll('.swiper-slide')
  for(let i = 0; i < slides.length; i++) {
    const customBullet = document.createElement('span')
    customBullet.dataset.id = i
    customBullet.classList.add('swiper-pagination-bullet')
    bulletsContainer.append(customBullet)
  }

  document.querySelector(`[data-id="0"]`).classList.add('swiper-pagination-bullet-active')

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  autoplay: {
    delay: 5000,
  },

  on: {
    init: ()=> {
      document.querySelector('.timer-swiperAfter').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.timer-swiperAfter').classList.add('active');
        }, 50);
    },
    slideChange: ()=> {
        document.querySelector('.timer-swiperAfter').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.timer-swiperAfter').classList.add('active');
        }, 50);
    },
},
});

swiper.on('activeIndexChange', function() {
  const index = swiper.activeIndex
  document.getElementById('fractionCurrent').textContent = index + 1
  document.querySelectorAll('.swiper-pagination-bullet').forEach( function (bullet) {
    bullet.classList.remove('swiper-pagination-bullet-active')
  })
  document.querySelector(`[data-id="${index}"]`).classList.add('swiper-pagination-bullet-active')
})

document.querySelectorAll('.swiper-pagination-bullet').forEach(function (bullet) {
  bullet.addEventListener('click', function (e) {
    const index = e.currentTarget.dataset.id
    swiper.slideTo(index,300)
    document.querySelectorAll('.swiper-pagination-bullet').forEach( function (bullet) {
      bullet.classList.remove('swiper-pagination-bullet-active')
    })
    document.querySelector(`[data-id="${index}"]`).classList.add('swiper-pagination-bullet-active')
  })
})

