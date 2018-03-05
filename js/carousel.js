jQuery(document).ready(function( $ ) {

  // Initiate the wowjs animation library
  //new WOW().init();

  // Initiate superfish on nav menu
  /*
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  */

  // Intro carousel
  /*
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });
  */

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 3 }, 900: { items: 5 }
    }
  });

  lightbox.option({
      "showImageNumberLabel": false,
    })


});

