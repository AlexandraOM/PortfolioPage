// this plays the slideshow automatically, starts at index 0 (i.e. first image)
var playing = true;
var slideIndex = 0;
loopSlides(1);

function showSlides(nextOrPrev) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var caption = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  // Move to next slide
  if (nextOrPrev === 1) {
    slideIndex = slideIndex + 1;
  }
  // Move to previous slide
  if (nextOrPrev === -1) {
    slideIndex = slideIndex - 1;
  }
  // by the end of slideshow loop around to beginning
  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }
  // if when going backwards you get to the beginning(0), restart at the end of the slideshow
  if (slideIndex === 0 && nextOrPrev === -1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  captionText.innerHTML = caption[slideIndex].alt;
}

var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  playing = false;
  pauseButton.innerHTML = "&#9658";
}

function playSlideshow() {
  pauseButton.innerHTML = "||";
  playing = true;
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
