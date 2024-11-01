// === querySelectorAll('.tab-button')[0]
$(".tab-button")
  .eq(0)
  .on("click", function () {
    $(this).addClass("color");
    $(".tab-button").eq(1).removeClass("color");
    $(".tab-button").eq(2).removeClass("color");
  });
