document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");

    // Function to show modal with a message
    function showModal(message) {
        const modal = document.getElementById("alertModal");
        const alertMessage = document.getElementById("alertMessage");
        alertMessage.innerText = message;
        modal.style.display = "block";

        // Close modal on clicking the OK button
        document.getElementById("modalOkButton").onclick = () => {
            modal.style.display = "none";
        };

        // Close modal on clicking the close button (×)
        document.querySelector(".close").onclick = () => {
            modal.style.display = "none";
        };
    }

    const stars = document.querySelectorAll('.stars span');
    let ratingValue = 0;

    function resetStars() {
        stars.forEach(star => {
            star.style.color = '#555'; 
        });
    }

    resetStars();

    stars.forEach(star => {
        star.addEventListener('click', () => {
            ratingValue = star.getAttribute('data-value');
            updateStars();
            document.getElementById("ratingValue").value = ratingValue; 
        });
    });

    function updateStars() {
        stars.forEach(star => {
            star.style.color = star.getAttribute('data-value') <= ratingValue ? '#ffc107' : '#555';
        });
    }

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Retrieve form values
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const productName = document.getElementById("productName").value;
        const comments = document.getElementById("experience").value;
        const rating = document.getElementById("ratingValue").value;

        // Regular expression to allow only letters, numbers, and spaces
        const validInputRegex = /^[a-zA-Z0-9\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // Combined validation for first name
        if (firstName.startsWith(" ")) {
            showModal("Please enter your first name without leading spaces.");
            document.getElementById("firstName").focus();
            return false ;
        } else if (!validInputRegex.test(firstName)) {
            showModal("Please enter a valid first name without special characters.");
            document.getElementById("firstName").focus();
            return false;
        }

        // Combined validation for middle name
        if (middleName.startsWith(" ")) {
            showModal("Please enter your middle name without leading spaces.");
            document.getElementById("middleName").focus();
            return false;
        } else if (middleName !== "" && !validInputRegex.test(middleName)) {
            showModal("Please enter a valid middle name without special characters.");
            document.getElementById("middleName").focus();
            return false;
        }

        // Combined validation for last name
        if (lastName.startsWith(" ")) {
            showModal("Please enter your last name without leading spaces.");
            document.getElementById("lastName").focus();
            return false;
        } else if (!validInputRegex.test(lastName)) {
            showModal("Please enter a valid last name without special characters.");
            document.getElementById("lastName").focus();
            return false;
        }

        // Combined validation for email
        if (email.startsWith(" ")) {
            showModal("Please enter your email without leading spaces.");
            document.getElementById("email").focus();
            return false;
        } else if(!emailRegex.test(email)){
            showModal("Please enter a valid email address.");
            document.getElementById("email").focus();
            return false;
        }

        // Combined validation for product name
        if (productName.startsWith(" ")) {
            showModal("Please enter the product name without leading spaces.");
            document.getElementById("productName").focus();
            return false;
        } else if (!validInputRegex.test(productName)) {
            showModal("Please enter a valid product name without special characters.");
            document.getElementById("productName").focus();
            return false;
        }

        // Combined validation for comments
        if (comments.startsWith(" ")) {
            showModal("Please enter your comment without leading spaces.");
            document.getElementById("experience").focus();
            return false;
        }

        // Check if rating is selected
        if (rating === "") {
            showModal("Rating must be selected.");
            return false;
        }

        // Create an object to store form data
        const feedback = {
            firstName,
            middleName,
            lastName,
            email,
            productName,
            comments,
            rating
        };

        // Retrieve existing entries from localStorage or initialize a new array
        let entries = JSON.parse(localStorage.getItem('savedFeedback')) || [];
        
        // Add the new feedback to the array
        entries.push(feedback);

        // Save the updated array back to localStorage
        localStorage.setItem('savedFeedback', JSON.stringify(entries));

        // Display success modal
        showModal("Thank you for your feedback!");

        // After clicking OK on success, reset form and redirect
        document.getElementById("modalOkButton").onclick = () => {
            document.getElementById("alertModal").style.display = "none";
            form.reset(); // Clear form fields
            window.location.href = 'thankyoupage.html';
        };
    });
});
