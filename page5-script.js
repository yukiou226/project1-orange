document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector("#page6-nav .dropdown");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function() {
        dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function() {
        dropdownMenu.style.display = "none";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('#page6-nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});