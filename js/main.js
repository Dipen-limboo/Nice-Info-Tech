document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight - 100) { 
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    });
});




