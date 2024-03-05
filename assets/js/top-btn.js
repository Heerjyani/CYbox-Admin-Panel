$(document).ready(function () {
  $(".top-btn").css("display", "none");
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $(".top-btn").slideDown(500);
  } else {
    $(".top-btn").slideUp(250);
  }
});
