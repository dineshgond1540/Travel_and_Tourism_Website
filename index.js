
//  $(document).ready(function () {
//    // Initialize the first carousel
//    initCarousel("carouselExampleControls_home_page");

//    // Initialize the second carousel
//    initCarousel("carouselExampleControls_populor_tour");

//    // Initialize the third carousel
//    initCarousel("carouselExampleControls_international_destination");

//    function initCarousel(carouselId) {
//      var carousel = $("#" + carouselId);
//      var carouselWidth = carousel.find(".carousel-inner")[0].scrollWidth;
//      var cardWidth = carousel.find(".carousel-item").width();
//      var scrollposition = 0;

//      carousel.find(".carousel-control-next").on("click", function () {
//        if (scrollposition < carouselWidth - cardWidth * 4) {
//          console.log("next");
//          scrollposition = scrollposition + cardWidth;
//          carousel
//            .find(".carousel-inner")
//            .animate({ scrollLeft: scrollposition }, 600);
//        }
//      });

//      carousel.find(".carousel-control-prev").on("click", function () {
//        if (scrollposition > 0) {
//          console.log("prev");
//          scrollposition = scrollposition - cardWidth;
//          carousel
//            .find(".carousel-inner")
//            .animate({ scrollLeft: scrollposition }, 600);
//        }
//      });
//    }
//  });

// for icon 

document.addEventListener("DOMContentLoaded", function () {
  const iconButtons = document.querySelectorAll('.icon-button');

  iconButtons.forEach(button => {
    button.addEventListener('click', () => {
      iconButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});




$(document).ready(function () {
  var currentContent = "singapore-content"; // Initial content to display

  // Function to load content
  function loadContent(contentId) {
    var contentUrl = contentId + ".html"; // Create the URL for the content

    // Use AJAX to load the content from the specified URL
    $.ajax({
      url: contentUrl,
      dataType: "html",
      success: function (data) {
        // Insert the loaded content into the content container
        $("#content-container").html(data);
      },
      error: function () {
        // Handle errors, e.g., content not found
        $("#content-container").html("Content not found.");
      },
    });
  }

  // Initially load the default content
  loadContent(currentContent);

  // Handle button clicks
  $(".icon-button").on("click", function () {
    var destination = $(this).data("page"); // Get the data-page attribute
    currentContent = destination; // Update the current content
    loadContent(currentContent); // Load the new content
  });
});







$(document).ready(function () {
  // Handle dropdown clicks
  $(".dropdown-toggle").on("click", function () {
    var targetDropdown = $(this).next(".dropdown-menu");
    $(".dropdown-menu").not(targetDropdown).removeClass("show");
    targetDropdown.toggleClass("show");
  });

  // Handle carousel control button clicks
  $(".carousel-control-prev").on("click", function () {
    $("#carouselExampleControls").carousel("prev");
  });

  $(".carousel-control-next").on("click", function () {
    $("#carouselExampleControls").carousel("next");
  });
});






  document
    .getElementById("openFormButton")
    .addEventListener("click", function () {
      document.getElementById("formContainer").style.display = "block";
      this.style.display = "none";
    });
