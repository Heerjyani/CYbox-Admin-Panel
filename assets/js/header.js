$(document).ready(function () {
  var mainHeader = $(".main-header");
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = mainHeader.outerHeight();

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      mainHeader.addClass("scrolled").css("top", -navbarHeight);
    } else {
      mainHeader.removeClass("scrolled").css("top", 0);
    }

    lastScrollTop = st;

    if ($(window).scrollTop() <= 20) {
      $(".main-header").css("opacity", "0");
      $(".main-header").css("transition", "all 0.3s");
    } else {
      $(".main-header").css("opacity", "1");
      $(".main-header").css("transition", "all 0.9s");
    }
  });
});
