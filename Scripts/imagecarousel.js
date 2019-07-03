document.addEventListener("keydown", function(event) {
  var ekey = event.keyCode;
  if (37 === ekey) {
    //left arrow
    pauseSlideshow();
    plusSlides(-1);
  }
  if (39 === ekey) {
    // right arrow
    pauseSlideshow();
    plusSlides(1);
  }
  if (32 === ekey) {
    // space bar
    if (playing) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  }
});

// w3 schools //
// this plays the slideshow automatically, starts at index 0 (i.e. first image)
var playing = true;
var slideIndex = 0;
showSlides(1);

function loopSlides(nextOrPrev) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var caption = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  captionText.innerHTML = caption[slideIndex].alt;

  if (nextOrPrev === 1) {
    slideIndex = slideIndex + 1;
  }

  if (nextOrPrev === -1) {
    slideIndex = slideIndex - 1;
  }

  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }
}

function showSlides(nextOrPrev) {
  if (playing) {
    loopSlides(nextOrPrev);
    setTimeout(function() {
      showSlides(1);
    }, 3000);
  }
}

// https://codepen.io/dubhcait/pen/dwRPaJ //

var pauseButton = document.getElementById("pause");
// var slideInterval = setInterval(plusSlides(0), 3000);

function pauseSlideshow() {
  pauseButton.innerHTML = "&#9658";
  playing = false;
  // clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "||";
  playing = true;
  console.log("hello");
  // slideInterval =
  showSlides(1);
}

function controlSlideshow() {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
}

// pauseSlideshow();
