$(document).ready(function(){



    
$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
   dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-two').owlCarousel({
    loop:true,
    
    margin:10,
   dots:false,
   nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


//click to move-up
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
})




AOS.init();



});
