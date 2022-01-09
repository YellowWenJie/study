Init();

//Mouse Wheel event : jQuery Mouse Wheel Plugin
$(".pane,.scrzone").mousewheel(function (event) {
  event.preventDefault();
  if ($ScrollState == false) {
    $ScrollState = true;
    if (event.deltaY < 0) {
      UpdateScreen("+");
    } else if (event.deltaY > 0) {
      UpdateScreen("-");
    } else {
      $ScrollState = false;
    }
  }
});

//Init
function Init() {
  $ScrollSpeed = 0.3; //Vitesse animation
  $ScrollState = false; //Scroll possible si True - Si False anim déjà en cours //
  $ActualSlide = $CibleSlide = $(".pane").first().attr("data-id"); //Première slide
  $ListSlides = new Array();
  $(".pane").each(function () {
    $ListSlides.push($(this).attr("data-id"));
  }); //Liste des slides (.pane)
  TweenMax.to(window, 0, { scrollTo: 0 });
  TweenMax.to(".spane", 0, { scrollTo: { y: 0, x: 0 } });
  $(".visible").removeClass("visible");
  $("#Helper").html("Init()"); //Helper
}

//ANIMATE
function UpdateScreen(operator) {
  $ActualSlide = $CibleSlide;
  if (operator == "+") {
    $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) + 1];
  } else {
    $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) - 1];
  } //Si + slide suivante / si - slide précédente
  $("#Helper").html(
    "From <strong>" +
      $ActualSlide +
      "</strong> to <strong>" +
      $CibleSlide +
      "</strong>"
  ); //helper
  if (!$CibleSlide) {
    $ScrollState = false;
    $("#Helper").html("Break");
    $CibleSlide = $ActualSlide;
    return;
  } //Arrete tout si pas de slide avant/après
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  //Scroll To : Greensock GSAP
  if (
    $ActualSlideDOM.closest(".prt").find(".spane").length &&
    ((operator == "+" && $ActualSlideDOM.next(".pane").length) ||
      (operator == "-" && $ActualSlideDOM.prev(".pane").length))
  ) {
    TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
      scrollTo: ".pane[data-id=" + $CibleSlide + "]",
      ease: Power2.easeOut,
      onComplete: function () {
        $ScrollState = false;
        $CibleSlideDOM.addClass("visible");
      }
    }); //Horizontal ou vertical
  } else {
    TweenMax.to(window, $ScrollSpeed, {
      scrollTo: ".pane[data-id=" + $CibleSlide + "]",
      ease: Power2.easeOut,
      onComplete: function () {
        $ScrollState = false;
        $CibleSlideDOM.addClass("visible");
      }
    }); //Normal
  }
}

//Init() On Resize
$(window).resize(function () {
  Init();
});
