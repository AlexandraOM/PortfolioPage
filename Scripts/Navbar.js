// NAVBAR

// Navbar shrink to burger menu on smaller screens
function responsiveNavBar() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
//burger menu to X on click
var menu = document.querySelector("#menu");

menu.addEventListener("click", function() {
  this.classList.toggle("active");
});
//

//hide navbar on scroll
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight
  ) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
};
