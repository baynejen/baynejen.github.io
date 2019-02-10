// FADE CONTENT IN 
  // https://codepen.io/bramus/pen/yikfd
  // CSS Animations (extracted from http://glifo.uiparade.com/)
  // Trigger CSS animations on scroll.
  // Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/
jQuery(function($) {
    // Function which adds the 'animated' class to any '.animatable' in view
    var mq = window.matchMedia( "(min-width: 768px)" );
    var doAnimations = function() {
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      // Unbind scroll handler if we have no animatables
      //Behaviour for tablet and desktop
      if (mq.matches){
        if ($animatables.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
          var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 300) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
          }
        });
      }
      //Behaviour for mobile
      else{
        if ($animatables.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
          var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 400) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
          }
        });
      }
    };
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  }
);

// SMOOTH SCROLL FOR MENU LINKS
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 400, 'swing', function () {
      window.location.hash = target;
    });
  });
});
    
// ADAPT MENU ON SCROLL
$(document).ready(function(){
  var scrollTop = 0;
  var mq = window.matchMedia( "(min-width: 768px)" );

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (mq.matches){
      if (scrollTop >= 600) {
        $('header').addClass('scrolled-nav');
      } 
      else if (scrollTop < 600) {
        $('header').removeClass('scrolled-nav');
      } 
    } 

    else{
      if (scrollTop >= 150) {
        $('header').addClass('scrolled-nav');
      } 
      else if (scrollTop < 150) {
        $('header').removeClass('scrolled-nav');
      } 
    }

  }); 
});

// SIDE NAV
function openNavTrouva() {
  document.getElementById("trouva").style.width = "100%";
  document.getElementById("hero-anchor").style.position = "relative";
  document.getElementById("hero-anchor").style.overflow = "hidden";
  document.getElementById("hero-anchor").style.height = "100%";
  document.getElementById("hero-anchor").style.margin = "0";
  document.getElementById("sticky").style.display = "none";
}
function openNavArtfinder() {
  document.getElementById("artfinder").style.width = "100%";
  document.getElementById("hero-anchor").style.overflow = "hidden";
  document.getElementById("hero-anchor").style.height = "100%";
  document.getElementById("hero-anchor").style.margin = "0";
  document.getElementById("hero-anchor").style.position = "relative";  
  document.getElementById("sticky").style.display = "none";
}
function openNavCocoaRunners() {
  document.getElementById("cocoaRunners").style.width = "100%";
  document.getElementById("hero-anchor").style.overflow = "hidden";
  document.getElementById("hero-anchor").style.height = "100%";
  document.getElementById("hero-anchor").style.margin = "0";
  document.getElementById("hero-anchor").style.position = "relative";
  document.getElementById("sticky").style.display = "none";
}
function openNavMemoryBox() {
  document.getElementById("memoryBox").style.width = "100%";
  document.getElementById("hero-anchor").style.overflow = "hidden";
  document.getElementById("hero-anchor").style.height = "100%";
  document.getElementById("hero-anchor").style.margin = "0";
  document.getElementById("hero-anchor").style.position = "relative";
  document.getElementById("sticky").style.display = "none";
}
function openNavPersonalPortfolios() {
  document.getElementById("personalPortfolios").style.width = "100%";
  document.getElementById("hero-anchor").style.overflow = "hidden";
  document.getElementById("hero-anchor").style.height = "100%";
  document.getElementById("hero-anchor").style.margin = "0";
  document.getElementById("hero-anchor").style.position = "relative";
  document.getElementById("sticky").style.display = "none";
}
function closeNav() {
  document.getElementById("trouva").style.width = "0";
  document.getElementById("artfinder").style.width = "0";
  document.getElementById("cocoaRunners").style.width = "0";
  document.getElementById("memoryBox").style.width = "0";
  document.getElementById("personalPortfolios").style.width = "0";
  document.getElementById("hero-anchor").style.overflow = "auto";
  document.getElementById("hero-anchor").style.position = "relative";
  document.getElementById("hero-anchor").style.height = "auto";
  document.getElementById("hero-anchor").style.margin = "auto";
  document.getElementById("sticky").style.display = "block";
}
