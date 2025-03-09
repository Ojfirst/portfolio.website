function openModal(title, description, image, liveLink, githubLink) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;
    document.getElementById('liveDemo').href = liveLink;
    document.getElementById('githubRepo').href = githubLink;
    document.getElementById('projectModal').style.display = "block";
}

// Close Modal
function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}