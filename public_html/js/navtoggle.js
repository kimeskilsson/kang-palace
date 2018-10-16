function navToggle() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
      nav.className += " dropped";
  } else {
      nav.className = "topnav";
  }
}
