export function filterByCategoryEvents() {
  const categories = document.querySelectorAll(`input[type="checkbox"]`);

  categories.forEach((cat) => {
    cat.addEventListener("change", () => {
      updateCheckedCategories();
    });
  });
}

function updateCheckedCategories() {
  const thumbnails = document.querySelectorAll(".thumb-container");

  const checkedCategories = Array.from(
    document.querySelectorAll(`input[type="checkbox"]:checked`)
  ).map((checkbox) => checkbox.value);

  thumbnails.forEach((container) => {
    const thumb = container.querySelector(".thumbnails");
    const thumbCategories = thumb.dataset.category.split(", ");

    const matchingCategory =
      checkedCategories.length === 0 ||
      thumbCategories.some((cat) => checkedCategories.includes(cat));

    container.style.display = matchingCategory ? "flex" : "none";
  });
}
