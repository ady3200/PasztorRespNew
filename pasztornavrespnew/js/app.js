$("document").ready(function () {
  $(".navtoggler").on("click", function () {
    $(".togglenav").removeClass("hide"), $(".navtogglerx").removeClass("hide");
    $(".navtoggler").addClass("hide");
  });

  $(".navtogglerx").on("click", function () {
    $(".togglenav").addClass("hide"),
      $(".navtoggler").removeClass("hide"),
      $(".navtogglerx").addClass("hide");
  });

  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    items: 3,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fas fa-arrow-right" aria-hidden="true"></i>',
    ],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      728: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
