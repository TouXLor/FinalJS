document.addEventListener("DOMContentLoaded", () => {
  const viewRecipeButtons = document.querySelectorAll(".recipeCard button");
  const recipeModal = document.getElementById("recipeModal");
  const recipeTitle = document.getElementById("recipeTitle");
  const closeModal = document.querySelector(".close-modal");

  // Function to open the modal and display placeholder text
  viewRecipeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".recipeCard");
      const title = card.querySelector("h3").textContent;

      // Update modal content
      recipeTitle.textContent = title;
      recipeModal.style.display = "flex";
    });
  });

  // Function to close the modal
  closeModal.addEventListener("click", () => {
    recipeModal.style.display = "none";
  });

  // Close modal when clicking outside content
  recipeModal.addEventListener("click", (event) => {
    if (event.target === recipeModal) {
      recipeModal.style.display = "none";
    }
  });
});
