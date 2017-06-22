$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

var distanceScrolled = 0;

$(window).scroll(function(){
  var currentDistance = $(this).scrollTop();
  if (currentDistance - distanceScrolled >= 50) {
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 100);
    distanceScrolled = currentDistance;
  } else if (distanceScrolled - currentDistance >= 50) {
    $('.navbar').animate({top: 0}, 100);
    distanceScrolled = currentDistance;
  }
});
