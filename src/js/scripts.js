$('.promo-nav-burger').click(function () {
  $('.nav-list-mobile').toggleClass('nav-closed');

  if ($('.nav-list-mobile').hasClass('nav-closed')) {
    $('.promo-nav-burger').removeClass('nav-burger-closed');
  } else {
    $('.promo-nav-burger').addClass('nav-burger-closed');
  }
});

$('.nav-item').click(function () {
  $('.nav-list-mobile').addClass('nav-closed');
  $('.promo-nav-burger').removeClass('nav-burger-closed');
});

$('.cases-slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="prev-arr"></button>',
  nextArrow: '<button class="next-arr"></button>',
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});

$('.cases-slider-design').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="prev-arr"></button>',
  nextArrow: '<button class="next-arr"></button>',
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});

$('.about-photo').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'slider-dots',
  customPaging: function (slider, i) {
    return '';
  },
  fade: true,
  focusOnSelect: true,
  pauseOnHover: false,
  //adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 720,
      settings: {
        pauseOnHover: false,
      },
    },
  ],
});

$('.about-btn-goit').click(function () {
  var buttonId = $(this).attr('id');
  $('#modal-container-goit').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});

$('.about-btn-cisco').click(function () {
  var buttonId = $(this).attr('id');
  $('#modal-container-cisco').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});

$('#modal-container-goit').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#modal-container-cisco').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

// $('.btn-sites').click(function () {
//   $('.slider-design').addClass('hidden'),
//     $('.slider-sites').removeClass('hidden');
// });

// $('.btn-design').click(function () {
//   $('.slider-sites').addClass('hidden'),
//     $('.slider-design').removeClass('hidden');
// });
