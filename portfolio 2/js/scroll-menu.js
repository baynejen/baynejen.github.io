$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 300) {
      $('header').addClass('scrolled-nav');
    } else if (scrollTop < 300) {
      $('header').removeClass('scrolled-nav');
    } 
    
  }); 
  
});