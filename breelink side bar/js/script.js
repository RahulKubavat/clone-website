var sidenav = document.getElementsByClassName("side-nav");

window.addEventListener("scroll", function() {
  var scrollY = window.scrollY;

  if (scrollY > 200) {
    sidenav.style.display = "none";
  } else {
    sidenav.style.display = "block";
  }
});