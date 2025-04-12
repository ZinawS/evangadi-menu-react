function filterCategory(category) {
  const items = document.querySelectorAll(".food-item");
  const buttons = document.querySelectorAll(".tab-button");

  // Show/hide items
  items.forEach((item) => {
    if (category === "All" || item.classList.contains(category.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Remove 'active' from all buttons
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to clicked button
  const activeButton = Array.from(buttons).find(
    (btn) => btn.textContent.trim() === category
  );
  if (activeButton) activeButton.classList.add("active");
}

export default filterCategory;
