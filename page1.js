document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
