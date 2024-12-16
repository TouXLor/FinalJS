document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".recipeCategories button");
  const recipes = document.querySelectorAll(".recipeCard");
  const searchInput = document.querySelector("#searchInput");
  const recipeGrid = document.querySelector(".recipeGrid");

  // Modal Elements
  const recipeModal = document.getElementById("recipeModal");
  const recipeTitle = document.getElementById("recipeTitle");
  const closeModal = document.querySelector(".close-modal");

  // Create a "No recipes" message
  const noRecipeMessage = document.createElement("p");
  noRecipeMessage.textContent = "No recipes at the moment.";
  noRecipeMessage.classList.add("no-recipes");
  noRecipeMessage.style.display = "none"; // Initially hidden
  recipeGrid.appendChild(noRecipeMessage);

  // Function to check if any recipes are visible
  function checkRecipesVisibility() {
    const visibleRecipes = Array.from(recipes).some(
      (recipe) => recipe.style.display !== "none"
    );

    if (visibleRecipes) {
      noRecipeMessage.style.display = "none";
    } else {
      noRecipeMessage.style.display = "block";
    }
  }

  // Filter recipes by category
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(".recipeCategories .active")
        .classList.remove("active");
      button.classList.add("active");

      const category = button.dataset.category;

      recipes.forEach((recipe) => {
        if (category === "all" || recipe.dataset.category === category) {
          recipe.style.display = "block";
        } else {
          recipe.style.display = "none";
        }
      });

      // Check if any recipes are visible
      checkRecipesVisibility();
    });
  });

  // Search recipes by name
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    recipes.forEach((recipe) => {
      const title = recipe.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    });

    // Check if any recipes are visible
    checkRecipesVisibility();
  });

  // View Recipe Button - Show Modal
  const viewRecipeButtons = document.querySelectorAll(".recipeCard button");
  viewRecipeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".recipeCard");
      const title = card.querySelector("h3").textContent;

      // Update modal content
      recipeTitle.textContent = title;
      recipeModal.style.display = "flex";
    });
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    recipeModal.style.display = "none";
  });

  recipeModal.addEventListener("click", (event) => {
    if (event.target === recipeModal) {
      recipeModal.style.display = "none";
    }
  });

  // Initial check
  checkRecipesVisibility();
});
