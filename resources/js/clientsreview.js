
document.addEventListener('DOMContentLoaded', function () {
    // Testimonials Data
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO, TechCorp",
            image: "resources/images/team/person1.jpg",
            review: "Amazing work! The website exceeded my expectations."
        },
        {
            name: "Jane Smith",
            position: "Marketing Director, XYZ Inc.",
            image: "resources/images/team/person2.jpg",
            review: "Highly professional and delivered on time. Great experience!"
        },
        {
            name: "Michael Johnson",
            position: "Founder, StartupX",
            image: "resources/images/team/person3.jpg",
            review: "Outstanding quality and attention to detail. Highly recommended!"
        }
    ];

    let currentIndex = 0;

    // Function to update testimonial content
    function updateTestimonial(index) {
        document.getElementById("client-image").src = testimonials[index].image;
        document.getElementById("client-review").textContent = `"${testimonials[index].review}"`;
        document.getElementById("client-name").textContent = testimonials[index].name;
        document.getElementById("client-position").textContent = testimonials[index].position;
    }

    // Event Listeners for Buttons
    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // Auto-Slide Testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    }, 5000);

    // Initialize first testimonial
    updateTestimonial(currentIndex);
});
