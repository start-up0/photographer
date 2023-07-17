$(document).ready(function () {
  $(".button_group button").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".grid-item").show("1000");
    } else {
      $(".grid-item")
        .not("." + value)
        .hide("1000");
      $(".grid-item")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".button_group button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
});
