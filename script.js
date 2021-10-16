//navigation
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "menu-item") {
      x.className += " responsive";
    } else {
      x.className = "menu-item";
    }
  }

