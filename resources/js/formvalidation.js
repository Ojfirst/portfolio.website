// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your actual public key)
emailjs.init('yLsI2GPoBf-IhJ67u');

function sendEmail() {
	// Get input values
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	let subject = document.getElementById('subject').value.trim();
	let message = document.getElementById('message').value.trim();

  console.log(name, email, subject, message);

	const templateParams = { name, email, subject, message };

	emailjs.send('service_19649ph', 'template_5xent8j', templateParams).then(
		(response) => {
			alert('SUCCESS!', response.status, response.text);
		},
		(error) => {
			alert('FAILED...', error);
		}
	);
}



// document
// 	.getElementById('form-carrier')
// 	.addEventListener('submit', function (event) {
// 		event.preventDefault(); // Prevent form submission

// 		let isValid = true;

// 		// Clear previous error messages
// 		document.getElementById('nameErr').textContent = '';
// 		document.getElementById('emailErr').textContent = '';
// 		document.getElementById('subjectErr').textContent = '';
// 		document.getElementById('msgErr').textContent = '';
// 		document.getElementById('submit-true').textContent = '';

// 		// Get input values
// 		let name = document.getElementById('name').value.trim();
// 		let email = document.getElementById('email').value.trim();
// 		let subject = document.getElementById('subject').value.trim();
// 		let message = document.getElementById('message').value.trim();

// 		// Name validation
// 		if (name === '') {
// 			document.getElementById('nameErr').textContent = 'Name is required.';
// 			isValid = false;
// 		}

// 		// Email validation
// 		let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// 		if (!emailPattern.test(email)) {
// 			document.getElementById('emailErr').textContent =
// 				'Enter a valid email address.';
// 			isValid = false;
// 		}

// 		// Subject validation
// 		if (subject.length < 3) {
// 			document.getElementById('subjectErr').textContent =
// 				'Subject should be at least 3 characters.';
// 			isValid = false;
// 		}

// 		// Message validation
// 		if (message.length < 10) {
// 			document.getElementById('msgErr').textContent =
// 				'Message should be at least 10 characters.';
// 			isValid = false;
// 		}

// 		if ((!name, !email, !subject, !message)) {
// 			document.getElementById('submit-true').textContent =
// 				'Please fill in all fields.';
// 			isValid = false;
// 			return;
// 		}

// 		// If all validations pass, submit the form (for now, just log to console)
// 		if (isValid) {
// 			document.getElementById('submit-true').textContent =
// 				'Message sent, Thank you!';
// 			document.getElementById('form-carrier').reset(); // Reset the form
// 		}

// 		console.log(name, email, subject, message);

//

// 	});
