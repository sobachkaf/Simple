const modal = document.querySelector(".modal");
const burgerMenu = document.querySelector(".burger-menu");
const cross = document.querySelector(".cross");

burgerMenu.addEventListener("click", function(){
    modal.classList.remove("hidden")
});

cross.addEventListener("click", function(){
    modal.classList.add("hidden")
});
