document.addEventListener("DOMContentLoaded", () => {
    const feedbackCard = document.getElementById("feedbackCard");
    const dayOfSubmission = document.getElementById("dayOfSubmission");

    // Retrieve the saved feedback from localStorage
    const feedbackEntries = JSON.parse(localStorage.getItem('savedFeedback')) || [];

    // Get the date of the last submission (for simplicity, we assume the last entry was the latest)
    if (feedbackEntries.length > 0) {
        const latestFeedback = feedbackEntries[feedbackEntries.length - 1]; // Get the last feedback entry

        // Create the feedback content dynamically
        feedbackCard.innerHTML = `
            <div class="card-body">
                <h2 class="card-title mb-5" id="cardtitle">Feedback Summary</h2>
                <p><strong>First Name:</strong> ${latestFeedback.firstName}</p>
                <p><strong>Middle Name:</strong> ${latestFeedback.middleName || 'N/A'}</p>
                <p><strong>Last Name:</strong> ${latestFeedback.lastName}</p>
                <p><strong>Email:</strong> ${latestFeedback.email}</p>
                <p><strong>Product Name:</strong> ${latestFeedback.productName}</p>
                <p><strong>Comments:</strong> ${latestFeedback.comments}</p>
                <p><strong>Rating:</strong> ${latestFeedback.rating} ★</p>
            </div>
        `;

        // Get the current date and format it
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Display the submission date
        dayOfSubmission.innerText = formattedDate;
    } else {
        feedbackCard.innerHTML = "<p>No feedback submitted yet.</p>";
        dayOfSubmission.innerText = "N/A";
    }
});