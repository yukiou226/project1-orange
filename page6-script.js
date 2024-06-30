document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('#page6-nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
