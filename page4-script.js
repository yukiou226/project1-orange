var hamburgerToggler = document.getElementsByClassName("navbar-toggler")[0];
var navbarMenu = document.getElementsByClassName ("page6-nav")[0];

hamburgerToggler.addEventListener("click", ()=>{
    navbarMenu.classList.toggle("active")
})