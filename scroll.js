$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
  
    $('.scroll-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 100);
        return false;
    });
  
  });