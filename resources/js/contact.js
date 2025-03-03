document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");

    // Show overlay
    openFormBtn.addEventListener("click", function () {
        overlay.style.display = "flex";
    });

    // Hide overlay
    closeFormBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    // Hide overlay when clicking outside the form
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});
