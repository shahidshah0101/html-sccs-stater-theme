
jQuery(document).ready(function(){
 
// Mobile Navigation
if ($('#nav-menu-container').length) {
  var $mobile_nav = $('#nav-menu-container').clone().prop({
    id: 'mobile-nav'
  });
  $mobile_nav.find('> ul').attr({
    'class': '',
    'id': ''
  });
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" id="mobile-nav-toggle"><span></span><span></span><span></span></button>');
  $('body').append('<div id="mobile-body-overly"></div>');
  $('#mobile-nav ul li:has(ul)').addClass('menu-has-children');
  $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-angle-down"></i>');

  $(document).on('click', '.menu-has-children i', function(e) {
    $(this).next().toggleClass('menu-item-active');
    $(this).nextAll('ul').eq(0).slideToggle();
    $(this).toggleClass("fas fa-angle-up fa fa-angle-down");
  });

  $(document).on('click', '#mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');      
    $('#mobile-body-overly').toggle();
    $(this).toggleClass('open');
  });

  $(document).click(function(e) {
    var container = $("#mobile-nav, #mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('close-icon');
        $('#mobile-body-overly').fadeOut();
        $('#mobile-nav-toggle').toggleClass('open');
      }
    }
  });
} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
  $("#mobile-nav, #mobile-nav-toggle").hide();
}
// ------------------------------------------------------- //
// Scroll Top Button
// ------------------------------------------------------- //
$('#scrollTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0}, 1000);
});

var c, currentScrollTop = 0,
navbar = $('.nav-menu');
$(window).on('scroll', function () {

// Navbar functionality
var a = $(window).scrollTop(), b = navbar.height();

currentScrollTop = a;
if (c < currentScrollTop && a > b + b) {
  navbar.addClass("scrollUp");
} else if (c > currentScrollTop && !(a <= b)) {
  navbar.removeClass("scrollUp");
}
c = currentScrollTop;


if ($(window).scrollTop() >= 100) {
  $('#scrollTop').addClass('active');
} else {
  $('#scrollTop').removeClass('active');
}
});


// ---------------------------------------------------------- //
// Preventing URL update on navigation link click
// ---------------------------------------------------------- //
$('.link-scroll').on('click', function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 1000);
  e.preventDefault();
});
});

jQuery(window).on('load', function () {
  jQuery(".loading-section").fadeOut('slow');
});
