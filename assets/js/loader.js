$(window).on("load", function () {
  // Simulate a 5-second delay
  setTimeout(function () {
    $("#loader").slideToggle("", function () {
      // Show the page content
      $("#content").fadeToggle("fast");
    });
  }, 1000);
});
