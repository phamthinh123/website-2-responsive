
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
    
     loop:true,
    autoplay:true ,
    autoplayTimeout:2500,
    nav:true,
     navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],

    dots:false,
   
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:4,
            
        }
    }
  });
 
});