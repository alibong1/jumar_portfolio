// Function to show the custom modal
function showModalAlert(message, callback = null) {
  const modal = document.getElementById("alertModal");
  const alertMessage = document.getElementById("alertMessage");

  // Set the message in the modal
  alertMessage.innerText = message;

  // Display the modal
  modal.style.display = "block";

  // Add event listener to close the modal when "OK" is clicked
  document.getElementById("modalOkButton").onclick = function () {
    modal.style.display = "none";
    if (callback) callback(); // If there's a callback (like focusing a field), call it
  };
}

// Close the modal if the user clicks on the 'X'
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("alertModal").style.display = "none";
});

// Optional: Close the modal if the user clicks outside of it
window.onclick = function (event) {
  const modal = document.getElementById("alertModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function restrictSpecialCharacters(event) {
  const input = event.target;

  const regex = /^[a-zA-Z\s]*$/;

  if (!regex.test(input.value)) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    showModalAlert("Please enter letters only.");  // Replaced alert with modal
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.getElementById("firstName");
  const middleNameInput = document.getElementById("middleName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const form = document.getElementById("newsletterForm");

  firstNameInput.addEventListener("input", restrictSpecialCharacters);
  middleNameInput.addEventListener("input", restrictSpecialCharacters);
  lastNameInput.addEventListener("input", restrictSpecialCharacters);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const firstName = firstNameInput.value;
    const middleName = middleNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;

    // Validate first name
    if (firstName.trim() === "" || /^\s/.test(firstName)) {
      showModalAlert("First name cannot be empty or start with a space.", () => {
        firstNameInput.focus(); // Callback to focus after modal closes
        firstNameInput.style.border = "2px solid red";
      });
      return;
    }
    else {
      firstNameInput.style.border = "2px solid green";
    }

    // Validate middle name (optional)
    if (middleName !== "" && /^\s/.test(middleName)) {
      showModalAlert("Middle name cannot start with a space.", () => {
        middleNameInput.focus();
        middleNameInput.style.border = 'red';
        middleNameInput.style.border = "2px solid red";
      });
      return;
    }
    else {
      middleNameInput.style.border = "2px solid green";
    }

    // Validate last name
    if (lastName.trim() === "" || /^\s/.test(lastName)) {
      showModalAlert("Last name cannot be empty or start with a space.", () => {
        lastNameInput.focus();
        lastNameInput.style.border = "2px solid red";
      });
      return;
    }
    else {
      lastNameInput.style.border = "2px solid green";
    }

    // Validate email format (basic)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showModalAlert("Please enter a valid email address.", () => {
        emailInput.focus();
        emailInput.style.border = "2px solid red";
      });
      return; // Exit the function if validation fails
    }
    else {
      emailInput.style.border = "2px solid green";
    }

    // Validate that one sport is selected
    const selectedSport = document.querySelector('input[name="sports"]:checked');

    if (!selectedSport) {
      document.getElementById("sportError").textContent = "Please select one sport.";
      return; // Exit the function if validation fails
    } else {
      document.getElementById("sportError").textContent = ""; // Clear error message
    }

    showModalAlert("You selected: " + selectedSport.value, () => {
      const sportValue = selectedSport.value;
      window.location.href = `thankyoupage.html?sport=${sportValue}`;
      showLoaderAndRedirect();
    });
  });
});

showLoaderAndOverlay();
