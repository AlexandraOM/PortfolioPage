document.addEventListener("keydown", function(event) {
  var ekey = event.keyCode;
  if (37 === ekey) {
    //left arrow
    pauseSlideshow();
    previousSlide();
  }
  if (39 === ekey) {
    // right arrow
    pauseSlideshow();
    nextSlide();
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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
