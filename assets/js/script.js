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
