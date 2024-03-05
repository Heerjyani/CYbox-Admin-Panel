$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: getSlidesPerView(), // Call the function to get the initial slidesPerView
    spaceBetween: 20,
    updateOnWindowResize: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    initialSlide: 5,
    on: {
      click(event) {
        console.log("event.target", this.clickedIndex);
        mySwiper.slideTo(this.clickedIndex);
      },
    },
  });

  // Function to update slidesPerView based on screen size
  function getSlidesPerView() {
    var windowWidth = $(window).width();
    if (windowWidth >= 1400) {
      return 3;
    } else if (windowWidth >= 1200) {
      return 2;
    } else if (windowWidth >= 992) {
      return 2;
    } else if (windowWidth >= 768) {
      return 2;
    } else if (windowWidth >= 576) {
      return 2;
    } else {
      return 1;
    }
  }

  // Update slidesPerView on window resize
  $(window).on("resize", function () {
    mySwiper.params.slidesPerView = getSlidesPerView();
    mySwiper.update();
  });
});
