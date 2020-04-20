$('.cases-slider').slick({
  infinite: true,
  //autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  //centerMode: true,
  prevArrow: '<button class="prev-arr"></button>',
  nextArrow: '<button class="next-arr"></button>',
});

$('.cases-slider-design').slick({
  infinite: true,
  //autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="prev-arr"></button>',
  nextArrow: '<button class="next-arr"></button>',
});

$('.about-photo').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'slider-dots',
  customPaging : function(slider, i) {
    return '';
    },
  fade: true,
  focusOnSelect: true,
});

// $('.btn-sites').click(function () {
//   $('.slider-design').addClass('hidden'),
//     $('.slider-sites').removeClass('hidden');
// });

// $('.btn-design').click(function () {
//   $('.slider-sites').addClass('hidden'),
//     $('.slider-design').removeClass('hidden');
// });
