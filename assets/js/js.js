$('.header').hide();
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.header').show();
  } else {
    $('.header').hide();
  }
});
$('.slider').slick({
  dots: true,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
$('.recipe-0 .next').click(function () {
    $('.recipe-0').hide();
    $('.recipe-1').show();
  });
  $('.recipe-0 .prev').click(function () {
    $('.recipe-0').hide();
    $('.recipe-5').show();
  });
  $('.recipe-1 .next').click(function () {
    $('.recipe-1').hide();
    $('.recipe-2').show();
  });
  $('.recipe-1 .prev').click(function () {
    $('.recipe-1').hide();
    $('.recipe-0').show();
  });
  $('.recipe-2 .next').click(function () {
    $('.recipe-2').hide();
    $('.recipe-3').show();
  });
  $('.recipe-2 .prev').click(function () {
    $('.recipe-2').hide();
    $('.recipe-1').show();
  });
  $('.recipe-3 .next').click(function () {
    $('.recipe-3').hide();
    $('.recipe-4').show();
  });
  $('.recipe-3 .prev').click(function () {
    $('.recipe-3').hide();
    $('.recipe-2').show();
  });
  $('.recipe-4 .next').click(function () {
    $('.recipe-4').hide();
    $('.recipe-5').show();
  });
  $('.recipe-4 .prev').click(function () {
    $('.recipe-4').hide();
    $('.recipe-3').show();
  });
  $('.recipe-5 .next').click(function () {
    $('.recipe-5').hide();
    $('.recipe-0').show();
  });
  $('.recipe-5 .prev').click(function () {
    $('.recipe-5').hide();
    $('.recipe-4').show();
  });
  

  $('.slide0').click(function () {
    $('.opacity').show();
    $('.recipe-0').show();
    $('.recipe-1').hide();
    $('.recipe-2').hide();
    $('.recipe-3').hide();
    $('.recipe-4').hide();
    $('.recipe-5').hide();
    //$('.recipe-6').hide();
  });
  $('.slide1').click(function () {
    $('.opacity').show();
    $('.recipe-0').hide();
    $('.recipe-1').show();
    $('.recipe-2').hide();
    $('.recipe-3').hide();
    $('.recipe-4').hide();
    $('.recipe-5').hide();
   // $('.recipe-6').hide();
  });
  $('.slide2').click(function () {
    $('.opacity').show();
    $('.recipe-0').hide();
    $('.recipe-1').hide();
    $('.recipe-2').show();
    $('.recipe-3').hide();
    $('.recipe-4').hide();
    $('.recipe-5').hide();
   // $('.recipe-6').hide();
    // $('.recipe-7').hide();
  });
  $('.slide3').click(function () {
    $('.opacity').show();
    $('.recipe-0').hide();
    $('.recipe-1').hide();
    $('.recipe-2').hide();
    $('.recipe-3').show();
    $('.recipe-4').hide();
    $('.recipe-5').hide();
   // $('.recipe-6').hide();
    // $('.recipe-7').hide();
  });
  $('.slide4').click(function () {
    $('.opacity').show();
    $('.recipe-0').hide();
    $('.recipe-1').hide();
    $('.recipe-2').hide();
    $('.recipe-3').hide();
    $('.recipe-4').show();
    $('.recipe-5').hide();
   // $('.recipe-6').hide();
    //$('.recipe-7').hide();
  });
  $('.slide5').click(function () {
    $('.opacity').show();
    $('.recipe-0').hide();
    $('.recipe-1').hide();
    $('.recipe-2').hide();
    $('.recipe-3').hide();
    $('.recipe-4').hide();
    $('.recipe-5').show();
    //$('.recipe-6').hide();
    // $('.recipe-7').hide();
  });
  // $('.slide6').click(function () {
  //   $('.opacity').show();
  //   $('.recipe-0').hide();
  //   $('.recipe-1').hide();
  //   $('.recipe-2').hide();
  //   $('.recipe-3').hide();
  //   $('.recipe-4').hide();
  //   $('.recipe-5').hide();
  //   //$('.recipe-6').show();
  //   // $('.recipe-7').hide();
  // });
  $('.close-recipe').click(function () {
    $('.opacity').hide();
  });