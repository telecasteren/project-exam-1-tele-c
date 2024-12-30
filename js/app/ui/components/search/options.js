import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { selectArrow } from "/js/utils/general/constants.js";
// import { createCheckboxDropdown } from "/js/app/ui/components/search/checkboxes.js";

export function setFilterOptions(onSortChange, onFilterChange) {
  try {
    const filtersContainer = document.querySelector(".blogList-container");

    if (!filtersContainer) {
      console.error("`.blogList-container` element not found.");
      return;
    }

    if (filtersContainer) {
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("filtersContainer");

      const FilterOptions = document.createElement("select");
      FilterOptions.classList.add("options");
      FilterOptions.style.appearance = "none";
      FilterOptions.style.backgroundImage = selectArrow("var(--primary-text)");
      FilterOptions.style.backgroundRepeat = "no-repeat";
      FilterOptions.style.backgroundPosition = "right 10px center";

      const defaultFilterOption = document.createElement("option");
      defaultFilterOption.innerText = "Filter by";
      defaultFilterOption.disabled = true;
      defaultFilterOption.selected = true;

      const SortOptions = document.createElement("select");
      SortOptions.classList.add("options");
      SortOptions.style.appearance = "none";
      SortOptions.style.backgroundImage = selectArrow("var(--primary-text)");
      SortOptions.style.backgroundRepeat = "no-repeat";
      SortOptions.style.backgroundPosition = "right 10px center";

      const defaultSortOption = document.createElement("option");
      defaultSortOption.innerText = "Sort by";
      defaultSortOption.disabled = true;
      defaultSortOption.selected = true;

      const sortAscending = document.createElement("option");
      sortAscending.value = "asc";
      sortAscending.innerText = "Date ascending";

      const sortDescending = document.createElement("option");
      sortDescending.value = "desc";
      sortDescending.innerText = "Date descending";

      const filterByTitle = document.createElement("option");
      filterByTitle.value = "filter_title";
      filterByTitle.innerText = "Filter by title";

      // const filterByCategory = document.createElement("option");
      // filterByCategory.className = "filterByCategory";
      // filterByCategory.value = "filter_category";
      // filterByCategory.innerText = "Filter by category";

      SortOptions.appendChild(defaultSortOption);
      SortOptions.appendChild(sortAscending);
      SortOptions.appendChild(sortDescending);

      FilterOptions.appendChild(defaultFilterOption);
      FilterOptions.appendChild(filterByTitle);
      // FilterOptions.appendChild(filterByCategory);

      optionsContainer.appendChild(FilterOptions);
      optionsContainer.appendChild(SortOptions);
      filtersContainer.prepend(optionsContainer);

      FilterOptions.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "filter_title") {
          onFilterChange("filter_title");
        }
        // else if (selectedOption === "filter_category") {
        //   onFilterChange("filter_category");
        //   // createCheckboxDropdown();
        // }
      });

      SortOptions.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "asc" || selectedOption === "desc") {
          const sortOrder = selectedOption;
          onSortChange(sortOrder);
        }
      });
    }
  } catch (error) {
    alertMessage("Couldn't display filters");
    throw new Error(`Error occurred: ${error.message}`);
  }
}
