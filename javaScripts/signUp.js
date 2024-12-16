// Get form and input elements
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Utility function to show error messages
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");
  let error = formGroup.querySelector(".error-message");
  if (!error) {
    error = document.createElement("small");
    error.className = "error-message";
    formGroup.appendChild(error);
  }
  error.textContent = message;
}

// Utility function to clear error messages
function clearError(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  const error = formGroup.querySelector(".error-message");
  if (error) {
    error.remove();
  }
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form submission handler
form.addEventListener("submit", (event) => {
  // Prevent default form submission
  event.preventDefault();

  let isValid = true;

  // Clear previous errors
  clearError(emailInput);
  clearError(usernameInput);
  clearError(passwordInput);
  clearError(confirmPasswordInput);

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  }

  // Validate username
  if (usernameInput.value.trim() === "") {
    showError(usernameInput, "Username is required.");
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters long.");
    isValid = false;
  } else if (!/\d/.test(passwordInput.value)) {
    showError(passwordInput, "Password must include at least one number.");
    isValid = false;
  }

  // Validate password confirmation
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match.");
    isValid = false;
  }

  // If all validations pass, submit the form (or handle it programmatically)
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    // Here you can add code to handle form submission, like sending data to a server
  }
});
