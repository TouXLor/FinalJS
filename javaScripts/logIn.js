// Get form and input elements
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

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
  clearError(passwordInput);

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required.");
    isValid = false;
  }

  // If all validations pass, proceed with login (or handle it programmatically)
  if (isValid) {
    alert("Login successful!");
    // Here you can add code to handle the login, such as sending data to a server
  }
});
