// Function for add active class to FAQ

const toggle = document.querySelectorAll('.faq-toggle');

toggle.forEach( toggle => {
    toggle.addEventListener('click', () => {
        toggle.closest('.faq').classList.toggle('active');
    })
})