
if (titleUrl === "theory-bigbang" || titleUrl === "earth-evolution"|| titleUrl === "what-is-black-hole"|| titleUrl ==="our-solar-system"){
    $(document).ready(function(){
        setTimeout(function(){
            $('.owl-carousel').owlCarousel({
                loop:true,
                items:1,
                margin:10,
                autoHeight:true,
                dots:false,
                nav:true,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                autoplay:true,
                autoplayTimeout:4000,
                 smartSpeed: 1200,

                autoplayHoverPause:true,
            })
        },1500)
        
      });
} 
else {
    $(document).ready(function(){
        setTimeout(function(){
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                dots: false,
                nav: true,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                    }
                },
                autoplay:true,
                autoplayTimeout:4000,
                smartSpeed: 500,

                autoplayHoverPause:true,
                
            })
        },1500)
        
      });
}