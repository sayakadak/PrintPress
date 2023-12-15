
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{

        0:{

            items:2
        },
        576:{

            items:3
        },
        992:{
          items:4
        },
        1200:{

            items:5
        }
    }
})