let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    // autoplay:{
    //   delay: 4500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className){
        return `<div class=${className}>
          <div class="number">0${index + 1}</div>
        </div>`
      }  
    }
  });
  
  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay:{
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1100:{
        slidesPerView: 3,
      }
    }
  });