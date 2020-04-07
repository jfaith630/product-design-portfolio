function windowResizeNavFix() {
  var x = document.getElementById("nav");
  var y = document.getElementById("close-nav-menu");
  var z = window.matchMedia("(max-width: 849px)");
  var z2 = window.matchMedia("(min-width: 850px)");
  if (z.matches) {
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    if (y.style.display === "block") {
      y.style.display = "none";
    }
  }
  if (z2.matches) {
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    }
    if (y.style.display === "block") {
      x.style.display = "none";
    }
  }
}
