const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    freeMode: {
      enabled: true,
      sticky: true,
    },

    autoplay: {
        delay: 5000,
      },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });