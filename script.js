const title1Title = document.querySelector(".title1-title");
const title2Title = document.querySelector(".title2-title");
const title3Title = document.querySelector(".title3-title");

//navigation
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "menu-item") {
      x.className += " responsive";
    } else {
      x.className = "menu-item";
    }
  }

