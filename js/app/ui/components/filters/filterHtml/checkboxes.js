import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";
import { getCategories } from "/js/app/ui/components/filters/categories/getCategories.js";
import {
  toggleCategoriesVisibility,
  closeCategoriesOnClickOutside,
} from "/js/app/eventListeners/filters/toggleCategories.js";

export async function createCheckboxes() {
  const blogListContainer = document.querySelector(".blogList-container");
  const filtersContainer = document.querySelector(".filtersContainer");

  const options = await getCategories();

  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "checkbox-dropdown-container";
  filtersContainer.appendChild(dropdownContainer);

  const filterByCategoryElement = document.querySelector("#filterByCategory");

  let errorMessage = filtersContainer.querySelector(".errorWrapper");
  if (!errorMessage) {
    errorMessage = ErrorWrapper();
  }

  const checkboxList = document.createElement("div");
  checkboxList.id = "categoryCheckboxList";
  dropdownContainer.appendChild(checkboxList);

  options.forEach((option) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.id = option;
    checkbox.type = "checkbox";
    checkbox.value = option;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(option));
    checkboxList.appendChild(label);
  });

  toggleCategoriesVisibility(
    filterByCategoryElement,
    checkboxList,
    filtersContainer,
    errorMessage
  );

  closeCategoriesOnClickOutside(
    window,
    dropdownContainer,
    blogListContainer,
    checkboxList
  );
}
