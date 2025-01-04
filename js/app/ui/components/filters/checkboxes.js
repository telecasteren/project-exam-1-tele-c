// import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";

async function getCategories() {
  // const categories = await fetchPostsWithInfo();

  // Dynamically set by categories from api
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  return options;
}
getCategories();

export function createCheckboxDropdown() {
  const filtersContainer = document.querySelector(".filtersContainer");

  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "checkbox-dropdown-container";

  const filterByCategoryElement = document.querySelector(".filterByCategory");

  const checkboxList = document.createElement("div");
  checkboxList.style.display = "none";
  dropdownContainer.appendChild(checkboxList);
  filtersContainer.appendChild(dropdownContainer);

  options.forEach((option) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = option;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(option));
    checkboxList.appendChild(label);
    checkboxList.appendChild(document.createElement("br"));
  });

  // Toggle dropdown
  if (filterByCategoryElement) {
    filterByCategoryElement.addEventListener("click", () => {
      console.log("Dropdown button clicked");
      checkboxList.style.display =
        checkboxList.style.display === "none" ? "block" : "none";
    });
  } else {
    console.log(".filterByCategoryElement not found");
  }

  // Close if clicked outside
  window.addEventListener("click", (event) => {
    if (!dropdownContainer.contains(event.target)) {
      checkboxList.style.display = "none";
    }
  });
}
