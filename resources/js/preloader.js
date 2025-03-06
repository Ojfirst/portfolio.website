// Function For displaying preloader
window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").classList.add("hidden");
        document.getElementById("content").style.display = "block";
    }, 1500); // Delay to simulate loading effect
    document.getElementById('loading').innerText = 'Loading...'
};

