$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menubar/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.button:nth-child(1)').on('click', function(){
        window.location = "https://www.linkedin.com/in/shahad-aljehani/" ;    
   });
   $('.button:nth-child(2)').on('click', function(){
    window.location = "https://twitter.com/shahad_jehani";    
    });
    $('.button:nth-child(3)').on('click', function(){
    window.location = "https://www.behance.net/shahad_jehani";    
    });
    $('.button:nth-child(4)').on('click', function(){
    window.location = "https://github.com/ShahadDev2";    
    });
});