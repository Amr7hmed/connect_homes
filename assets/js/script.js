var owldeveloper = $(".owl-developer");
owldeveloper.owlCarousel({
  loop: false,
  margin: 15,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 8,
    },
  },
});

// Custom Button
$(".NextBtndeveloper").click(function () {
    owldeveloper.trigger("next.owl.carousel");
});
$(".PreviousBtndeveloper").click(function () {
    owldeveloper.trigger("prev.owl.carousel");
});



var owlproject = $(".latest_project");
owlproject.owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

// Custom Button
$(".NextBtnproject").click(function () {
    owlproject.trigger("next.owl.carousel");
});
$(".PreviousBtnproject").click(function () {
    owlproject.trigger("prev.owl.carousel");
});



var project__similarp = $(".project__similarpr");
project__similarp.owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3.5,
    },
  },
});

// Custom Button
$(".Nextsimilarprojects").click(function () {
  project__similarp.trigger("next.owl.carousel");
});
$(".Previoussimilarprojects").click(function () {
  project__similarp.trigger("prev.owl.carousel");
});


var property__similarpr = $(".property__similarpr");
property__similarpr.owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1.5,
    },
    1200: {
      items: 3.5,
    },
  },
});

// Custom Button
$(".Nextsimilarprojects").click(function () {
  property__similarpr.trigger("next.owl.carousel");
});
$(".Previoussimilarprojects").click(function () {
  property__similarpr.trigger("prev.owl.carousel");
});