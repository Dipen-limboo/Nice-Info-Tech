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

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.querySelector(".nav-right ul");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuIcon.style.display = "none"; // Hide the menu icon when navigation is open
        closeIcon.style.display = "block"; // Show the close icon
    });

    closeIcon.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuIcon.style.display = "block"; // Show the menu icon when navigation is closed
        closeIcon.style.display = "none"; // Hide the close icon
    });

    // Add event listener for each link in the navigation
    const navLinksList = navLinks.querySelectorAll("a");
    navLinksList.forEach(function(link) {
        link.addEventListener("click", function() {
            // Check if the window width is less than or equal to 480px
            if (window.innerWidth <= 480) {
                // If yes, hide the navigation and show the menu icon when a link is clicked
                navLinks.classList.remove("active");
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        });
    });
});






