"use strict";

function isMobileDevice() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
}

; // require Jquery

function smoothScroll(DOMelement, time) {
  DOMelement.on("click a", function (event) {
    if (time == null) time = 1000;
    event.preventDefault();
    var id = $(this).attr('data-nav-link'),
        top = $(id).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, time);
  });
}

;
$(function () {
  // WOW.js
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  }).init();
  var headerMain = $('.header');
  var headerMainScrollTrigger = 50; //.header:top(px)

  var headerNav = $('.header__nav');
  var menuBtn = $('.menu-btn');
  var testimonialsSlider = $('.testimonials__slider');
  var scrollOffset = 0;
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    if ($(this).innerWidth() > 767) {
      headerOnScroll();
    }

    function headerOnScroll() {
      if (scrollOffset >= headerMainScrollTrigger) {
        headerMain.addClass('scroll');
      } else {
        headerMain.removeClass('scroll');
        headerNav.removeClass('show');
        $('body').removeClass('body-fixed');
      }
    }
  });
  menuBtn.click(function (event) {
    $(this).toggleClass('active');
    headerNav.toggleClass('show');
    $('body').toggleClass('body-fixed');
  });
  testimonialsSlider.slick({
    arrows: true,
    dots: true,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false
      }
    }]
  });
  smoothScroll($('[data-nav-link]'));
});
//# sourceMappingURL=main.js.map
