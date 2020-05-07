// loader
$(function() {
  var h = $(window).height();
  $('.l_loader, .l_loader .loader').height(h).css('display','block');
});

$(window).load(function () {
  $('.l_loader').delay(600).fadeOut(800);
  $('.l_loader .loader').delay(300).fadeOut(300);
  $('.l_container_top, .l_container').css('opacity', '1');
});

$(function(){
  setTimeout('stopload()',5000);
});

function stopload(){
  $('.l_container_top, .l_container').css('opacity','1');
  $('.l_loader').delay(600).fadeOut(800);
  $('.l_loader .loader').delay(300).fadeOut(300);
}

// ページ遷移アニメーション
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass('js_page_trans');
      setTimeout(function(){
        window.location = url;
      }, 400);
    }
    return false;
  });
});

// ドロップダウンメニュー
$(function(){
  $('.c_list_1 .toggle').on('click', function() {
    $(this).next().slideToggle();
    if($(this).hasClass('minus')) {
      $(this).removeClass('minus');
      $(this).children('.plus').attr('src', 'assets/img/top/plus.svg');
    } else {
      $(this).addClass('minus');
      $(this).children('.plus').attr('src', 'assets/img/top/minus.svg');
    }
  });
});

// スライダー
$(function(){
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 6000,
    draggable: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerPadding:'71px'
        }
      },
      {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerPadding:'71px'
      }
    }
  ]
  });
});

// ウィンドウイン
$(function(){
  $('.l_main_visual .ttl').on('inview', function() {
    $(this).addClass('fade_in');
  });
  $('.l_main_visual .img_wrap1').on('inview', function() {
    $(this).addClass('fade_in');
  });
  $('.l_main_visual .img_wrap2').on('inview', function() {
    $(this).addClass('fade_in');
  });
  $('.sec3 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec3 .c_anima_1').addClass('fade_in');
    }else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec3 .c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec5 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec5 .c_anima_1').addClass('fade_in');
    }else {
        let bottom = $(this).height() + $(this).offset().top;
        let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec5 .c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec7 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec7 .c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec7 .c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec7.c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec7.c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec7.c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec8 .img_wrap1.c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec8 .img_wrap1.c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec8 .img_wrap1.c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec8 .img_wrap2.c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec8 .img_wrap2.c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec8 .img_wrap2.c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec9.c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec9.c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec9.c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec10 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec10 .c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec10 .c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec11 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec11 .c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec11 .c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec12.c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec12.c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec12.c_anima_1').removeClass('fade_in');
      }
    }
  });
  $('.sec13 .c_anima_1').on('inview', function(event, isInView) {
    if (isInView) {
     $('.sec13 .c_anima_1').addClass('fade_in');
    } else {
      let bottom = $(this).height() + $(this).offset().top;
      let scroll = $(window).scrollTop() + 200;
      if(bottom > scroll){
        $('.sec13 .c_anima_1').removeClass('fade_in');
      }
    }
  });
});