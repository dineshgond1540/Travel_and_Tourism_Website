$(document).ready(function () {
  // Initialize the first carousel
  initCarousel("carouselExampleControls_home_page");

  // Initialize the second carousel
  initCarousel("carouselExampleControls_populor_tour");

  // Initialize the third carousel
  initCarousel("carouselExampleControls_international_destination");

  function initCarousel(carouselId) {
    var carouselWidth = $("#" + carouselId + " .carousel-inner")[0].scrollWidth;
    var cardWidth = $("#" + carouselId + " .carousel-item").width();
    var scrollposition = 0;

    $("#" + carouselId + " .carousel-control-next").on("click", function () {
      if (scrollposition < carouselWidth - cardWidth * 4) {
        console.log("next");
        scrollposition = scrollposition + cardWidth;
        $("#" + carouselId + " .carousel-inner").animate(
          { scrollLeft: scrollposition },
          600
        );
      }
    });

    $("#" + carouselId + " .carousel-control-prev").on("click", function () {
      if (scrollposition > 0) {
        console.log("prev");
        scrollposition = scrollposition - cardWidth;
        $("#" + carouselId + " .carousel-inner").animate(
          { scrollLeft: scrollposition },
          600
        );
      }
    });
  }
});
