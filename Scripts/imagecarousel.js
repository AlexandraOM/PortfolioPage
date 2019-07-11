// this plays the slideshow automatically, starts at index 0 (i.e. first image)
var playing = true;
var slideIndex = 0;
if (playing) {
  loopSlides(1);
}

function showSlides(nextOrPrev) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var caption = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  captionText.innerHTML = caption[slideIndex].alt;
  // Move to previous slide
  if (nextOrPrev === -1) {
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  // Move to next slide
  if (nextOrPrev === 1) {
    slideIndex = slideIndex + 1;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
  }

  // by the end of slideshow loop around to beginning and if when going backwards you get to the beginning(0), restart at the end of the slideshow
  // else if (slideIndex + nextOrPrev < 0) {
  // }
}

var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  playing = false;
  pauseButton.innerHTML = "&#9658";
}

function playSlideshow() {
  playing = true;
  pauseButton.innerHTML = "||";
  loopSlides(1);
}

function controlSlideshow() {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
}

// https://codepen.io/dubhcait/pen/dwRPaJ //

//key functions
document.addEventListener("keydown", function(event) {
  var ekey = event.keyCode;
  if (37 === ekey) {
    //left arrow
    playing = false;
    pauseSlideshow();
    showSlides(-1);
  }
  if (39 === ekey) {
    // right arrow
    playing = false;
    pauseSlideshow();
    showSlides(1);
  }
  if (32 === ekey) {
    // space bar
    controlSlideshow();
  }
});

function loopSlides(nextOrPrev) {
  if (playing) {
    showSlides(nextOrPrev);
    setTimeout(function() {
      loopSlides(1);
    }, 3000);
  }
}
