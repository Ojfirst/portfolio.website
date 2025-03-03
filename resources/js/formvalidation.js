
document.getElementById("form-carrier").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameErr").textContent = "";
    document.getElementById("phoneErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("msgErr").textContent = "";
    document.getElementById("submit-true").textContent = "";

    // Get input values
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name validation
    if (name === "") {
        document.getElementById("nameErr").textContent = "Name is required.";
        isValid = false;
    }

    // Phone validation (only digits, 10-15 characters)
    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").textContent = "Enter a valid phone number (10-15 digits).";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message.length < 10) {
        document.getElementById("msgErr").textContent = "Message should be at least 10 characters.";
        isValid = false;
    }
    
    // If all validations pass, submit the form (for now, just log to console)
    if (isValid) {
        document.getElementById("submit-true").textContent = "Message sent, Thank you!";
        document.getElementById("form-carrier").reset(); // Reset the form
    }
});