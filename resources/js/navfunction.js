// Function for navbar translate
const navbar = document.getElementById('nav_bar');
let scrolled = false;

window.onscroll = function() {
    if (window.scrollY > 100) {
    navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-65px)';
        }
        setTimeout (function() {
            navbar.style.transform = 'translateY(0)';
            scrolled = true
        }, 200)
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
   }