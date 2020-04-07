function showOnClick() {
  var x = document.getElementById("nav");
  var y = document.getElementById("close-nav-menu");
  var z = window.matchMedia("(max-width: 849px)");
  if (z.matches) {
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      document.getElementById('body').className = 'stopscroll';
    } else {
      x.style.display = "none";
      document.getElementById('body').className = '';
    }
    if (y.style.display === "none" || y.style.display === "") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
}
