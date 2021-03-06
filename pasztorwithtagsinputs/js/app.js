$("document").ready(function () {
  /*DESKTOP NAV TOGGLE*/
  $(".navtoggler").on("click", function () {
    $(".togglenav").slideToggle("slow"),
      $(".togglenav").removeClass("hide"),
      $(".navtogglerx").removeClass("hide"),
      $(".navtoggler").addClass("hide");
  });

  $(".navtogglerx").on("click", function () {
    $(".togglenav").slideToggle("slow"),
      $(".togglenav").addClass("hide"),
      $(".navtoggler").removeClass("hide"),
      $(".navtogglerx").addClass("hide");
  });
  /*MOBILE NAV TOGGLE*/
  $(".navmenubutton").on("click", function () {
    $(".navmenubuttonx").removeClass("hide");
    $(".navmenubutton").addClass("hide");
  });

  $(".navmenubuttonx").on("click", function () {
    $(".navmenubutton").removeClass("hide");
    $(".navmenubuttonx").addClass("hide");
  });
  /*CAROUSEL ON INDEX PAGE*/
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    items: 3,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left carouselarrows" ></i>',
      '<i class="fas fa-arrow-right carouselarrows" ></i>',
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
