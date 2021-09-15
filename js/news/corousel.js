

$(function (){
    setTimeout(function(){
        $(".trending-slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
            dotsEach: 2,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
        });
        
    },1000)
    
  });
