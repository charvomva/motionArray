$('.navbar-nav, .navbar_shadow').on('mouseenter mouseleave',(function(aa){

if( aa.type == 'mouseenter'){
    $('.sub').stop().slideDown();
    $('.navbar_shadow').stop().fadeIn();
} else {
    $('.sub').stop().slideUp(250,function(){
        $('.sub').removeAttr('style');
    });
    $('.navbar_shadow').stop().fadeOut(250,function(){
        $(this).removeAttr('style');
    });
}}
))