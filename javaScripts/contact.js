document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contactForm");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#message");

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

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Form submit event listener
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    let isValid = true; // Track overall form validity

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, "Subject is required.");
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Message is required.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    // If form is valid, simulate sending the form
    if (isValid) {
      alert("Thank you for contacting us! Your message has been sent.");
      contactForm.reset(); // Clear form fields
    }
  });

  // Real-time validation for all inputs
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim()) {
        clearError(input);
        if (input === emailInput && !validateEmail(emailInput.value.trim())) {
          showError(emailInput, "Please enter a valid email address.");
        } else {
          clearError(emailInput);
        }
      }
    });
  });
});
