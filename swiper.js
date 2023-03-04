const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween:20,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakPoints:{
        700:{
            slidesPerView:2,
        },
    }

    
  });