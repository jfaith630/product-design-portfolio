function heroCurtain() {
  var h = window.innerHeight;
  if(h > 700)
    document.getElementById("hamburger-menu-backing-hero-curtain").style.margin = "-100vh 0 0 0";
  else
    document.getElementById("hamburger-menu-backing-hero-curtain").style.margin = "-70rem 0 0 0";
}
