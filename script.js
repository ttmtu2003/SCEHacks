const overviewTitle = document.querySelector(".crises-title");

//drop down nav
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "menu-item") {
      x.className += " responsive";
    } else {
      x.className = "menu-item";
    }
  }

 //crises buttons
 overviewTitle.addEventListener("click",function(x){
    if(x.target.classList.contains("crises-button")){
        const Target = x.target.getAttribute("data-title");
        overviewTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".crises");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active");
    }

    
 })