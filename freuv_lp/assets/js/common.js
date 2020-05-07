// // ユーザーエージェントにてViewport書き換え
// $(function() {
//   spView = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0';
//   tbView = 'width=1200px, maximum-scale=1.0, user-scalable=1';
//   if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
//     $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
//   } else if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0) {
//     $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
//   }
//   // iPhone6 Plus Landscape Viewport
//   if (navigator.userAgent.indexOf('iPhone') > 0) {
//     if (window.devicePixelRatio == 3) {
//       if (window.orientation == 0) {
//         $('#viewport').attr('content', spView);
//       } else {
//         $('#viewport').attr('content', tbView);
//       }
//       window.onorientationchange = setView;
//
//       function setView() {
//         setTimeout(function() {
//           location.reload();
//           return false;
//         }, 500);
//       }
//     }
//   }
// });

// // ユーザーエージェントにてiPhoneXの場合、htmlに「iphonex」クラスを付与
// document.addEventListener('DOMContentLoaded', function() {
//   if (isIPhoneX()) {
//     document.documentElement.className = "iphonex";
//   }
// }, false);
// function isIPhoneX() {
//   return isIPhone() && (window.screen.width === 375 && window.screen.height === 812 || window.screen.width === 812 && window.screen.height === 375);
// }
// function isIPhone() {
//   return !!(navigator.userAgent.match(/iPhone/i));
// }

// // ユーザーエージェントにてbodyにiPhone = 「iphone」、android = 「android」クラスを付与
// $(function() {
//   if (navigator.userAgent.indexOf('iPhone') > 0) {
//     $('body').addClass('iphone');
//   };
//   if (navigator.userAgent.indexOf('Android') > 0) {
//     $('body').addClass('android');
//   };
// });

// // iPhone safari,firefoxにてページ遷移後戻った際にページリロードし初期状態にする
// $(function() {
//   window.onpageshow = function(event) {
//     if (event.persisted) {
//       window.location.reload();
//     }
//   };
// });

// // ios10以上でuser-scalable=noが効かない為、代わりにピンチズーム機能を無効にする
// $(function() {
//   document.documentElement.addEventListener('touchstart', function(event) {
//     if (event.touches.length > 1) {
//       event.preventDefault();
//     }
//   }, false);
//   var lastTouchEnd = 0;
//   document.documentElement.addEventListener('touchend', function(event) {
//     var now = (new Date()).getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
//   }, false);
// });

// スマホ時自動で電話番号リンクに
$(function() {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    $('.js_tel_link').each(function() {
      var str = $(this).text();
      $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
    });
  }
});

// .js_add_hoverにマウスオーバーしてaddclass
$(function() {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // SP
    $('.js_add_hover').on('touchstart', function(){
      $(this).addClass('_hover');
    });
    $('.js_add_hover').on('touchend', function(){
      $(this).removeClass('_hover');
    });
  } else {
    // PC
    $('.js_add_hover').mouseover(function() {
      $(this).addClass('_hover');
    }).mouseout(function() {
      $(this).removeClass('_hover');
    });
  }
});

// マウスオーバー透過アニメーション
$(function() {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // SP
    $('.js_hover').on('touchstart', function(){
      $(this).stop().fadeTo(200, .5)
    });
    $('.js_hover').on('touchend', function(){
      $(this).stop().fadeTo(200, 1)
    });
  } else {
    // PC
    $('.js_hover').mouseover(function() {
      $(this).stop().fadeTo(200, .5)
    }).mouseout(function() {
      $(this).stop().fadeTo(200, 1)
    });
  }
});

// マウスオーバーでsrc置換
$(function() {
  $('.js_src img').hover(function() {
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  }, function() {
    if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
});

// スムーススクロール
document.addEventListener('DOMContentLoaded', function () {
  var mql = window.matchMedia('screen and (min-width: 1025px)');
  function checkBreakPoint(mql) {
    if (mql.matches) {
      // pc
      var headerHight = 70;
      $('.js_anchor').on('click',function() {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('html, body').animate({
          scrollTop: position
        }, 500, 'linear');
        return false;
      });
    } else {
      // sp
      var headerHight = 50;
      $('.js_anchor').on('click',function() {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('html, body').animate({
          scrollTop: position
        }, 500, 'linear');
        return false;
      });
    }
  }
  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);
});

// スクロールすると出てくる「ページトップへ」ボタン
$(function() {
  var topBtn = $('.js_btn_p_top');
  topBtn.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

// 要素がウィンドウに入ったら実行
$(function() {
  $(window).scroll(function() {
    $('.js_window_in').each(function() {
      var obj_t_pos = $(this).offset().top;
      var scr_count = $(document).scrollTop() + (window.innerHeight / 1);
      if (scr_count > obj_t_pos) {
        $(this).removeClass('_hide');
        $(this).addClass('_show');
      } else {
        $(this).addClass('_hide');
        $(this).removeClass('_show');
      }
    });
  });
});

// 要素がウィンドウに入ったら実行 1回のみ
$(function() {
  $(window).scroll(function() {
    $('.js_window_in_one').each(function() {
      var obj_t_pos = $(this).offset().top;
      var scr_count = $(document).scrollTop() + (window.innerHeight / 1);
      if (scr_count > obj_t_pos) {
        $(this).addClass('_show');
      }
    });
  });
});

// img ドラッグ・右クリック禁止
$(function(){
  $('img').attr('onmousedown', 'return false');
  $('img').attr('onselectstart', 'return false');
  $('img').attr('oncontextmenu', 'return false');
});
