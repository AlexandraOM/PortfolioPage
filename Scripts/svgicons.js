// SVG Icons
// function iconAnimation() {
//   var x = document.getElementById("footerIcons");
var blackImage = document.getElementsByClassName("footerIcons blackIcon");
var orangeImage = document.getElementsByClassName("footerIcons orangeIcon");
function switchElement() {
  blackImage.style.display = "none";
  orangeImage.style.display = "active";
}

//
// slides[slideIndex].style.display = "block";
// }
blackImage.addEventListener("mouseover", switchElement());
