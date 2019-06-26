// Navbar
function responsiveNavBar() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var prevScrollPos = window.pageYOffset
window.onscroll = scrollNavBar() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
}
// Navbar ends
