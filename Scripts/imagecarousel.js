// this plays the slideshow automatically, starts at index 0 (i.e. first image)
var playing = true;
var slideIndex = 0;
if (playing) {
  loopSlides(1);
}
var nextOrPrev = 0;
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
    event.preventDefault();
    controlSlideshow();
  }
});
// how to stop the next slide from showing before executing key function?

function showSlides(nextOrPrev) {
  var slides = document.getElementsByClassName("slide");
  var photos = document.getElementsByClassName("photo");
  var captionText = document.getElementById("caption");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  captionText.innerHTML = photos[slideIndex].alt;

  // Move to previous slide and by the start of slideshow loop around to end
  if (nextOrPrev === -1) {
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  // Move to next slide and loop back to the beginning
  if (nextOrPrev === 1) {
    slideIndex = slideIndex + 1;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
  }
}

var pauseButton = document.getElementById("pause");
nextOrPrev = 0;
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

function loopSlides(nextOrPrev) {
  if (playing) {
    showSlides(nextOrPrev);
    setTimeout(function() {
      loopSlides(1);
    }, 4000);
  }
}
