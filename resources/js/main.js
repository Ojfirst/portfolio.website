// Function For displaying preloader
window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").classList.add("fade-out");
        setTimeout(function() {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000); // Extra delay to complete fade-out
    }, 2000); // Simulated loading time
    document.getElementById('loading').innerText = 'Loading...'
};



// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }

    // Save preference
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});
    // Apply dark mode on page reload if enabled
    (function applyDarkMode(){
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    })()




// Scroll bar Function
window.onscroll = function () {
    updateScrollProgress();
};

function updateScrollProgress() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / scrollHeight) * 100;

    document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
}


// Function for (Show/Hide and Scroll Effects)
document.addEventListener('DOMContentLoaded', 
    function(){
        let scrollToTopBtn = document.getElementById('back-to-top');
        let scrollDownBtn = document.getElementById('scroll-down');

        // Show "Back to Top" when scrolling down
        window.addEventListener('scroll',
            function() {
                if (window.scrollY > 300) {
                    scrollToTopBtn.style.display = 'block'
                } else {
                    scrollToTopBtn.style.display = 'none'
                }
            }
        )

        // Scroll Down Button Functionality
        scrollDownBtn.addEventListener('click',
            function() {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth'});
            }
        )

        // Scroll to Top Button Functionality
        scrollToTopBtn.addEventListener('click',
            function() {
                window.scrollTo({ top: 0, behavior: 'smooth'})
            }
        )
    })


    