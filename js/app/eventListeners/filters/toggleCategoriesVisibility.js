import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export function toggleCategoriesVisibility(
  filterByCategoryElement,
  checkboxList,
  filtersContainer
) {
  if (filterByCategoryElement) {
    filterByCategoryElement.addEventListener("click", () => {
      checkboxList.style.display = "block";
    });
  } else {
    checkboxList.style.display = "none";

    const existingError = filtersContainer.querySelector(".errorWrapper");
    if (existingError) existingError.remove();

    const errorMessage = ErrorWrapper("Couldn't display category list");
    filtersContainer.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.remove();
    }, 5000);
  }
}

export function closeCategoriesOnClickOutside(
  window,
  dropdownContainer,
  blogListContainer,
  checkboxList
) {
  window.addEventListener("click", (event) => {
    if (
      !dropdownContainer.contains(event.target) &&
      !blogListContainer.contains(event.target)
    ) {
      checkboxList.style.display = "none";

      const filterDropdown = document.querySelector(".filterOptions");
      filterDropdown.selectedIndex = 0;
    }
  });
}
