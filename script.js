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

//  pop up list
const openListButtons = document.querySelectorAll('[data-list-target]')
const closeListButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openListButtons.forEach(button => {
  button.addEventListener('click', () => {
    const list = document.querySelector(button.dataset.listTarget)
    openList(list)
  })
})

overlay.addEventListener('click', () => {
  const list = document.querySelectorAll('.list.active')
  list.forEach(list => {
    closeList(list)
  })
})

closeListButtons.forEach(button => {
  button.addEventListener('click', () => {
    const list = button.closest('.list')
    closeList(list)
  })
})

function openList(list) {
  if (list == null) return
  list.classList.add('active')
  overlay.classList.add('active')
}

function closeList(list) {
  if (list == null) return
  list.classList.remove('active')
  overlay.classList.remove('active')
}

