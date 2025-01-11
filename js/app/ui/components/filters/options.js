import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { selectArrow } from "/js/utils/general/constants.js";
import { manageFilterEvents } from "/js/app/eventListeners/filters/manageFilterEvents.js";

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
      FilterOptions.classList.add("options", "filterOptions");
      FilterOptions.style.appearance = "none";
      FilterOptions.style.backgroundImage = selectArrow("var(--primary-text)");
      FilterOptions.style.backgroundRepeat = "no-repeat";
      FilterOptions.style.backgroundPosition = "right 10px center";

      const defaultFilterOption = document.createElement("option");
      defaultFilterOption.id = "optionText";
      defaultFilterOption.innerText = "Filter by";
      defaultFilterOption.disabled = true;
      defaultFilterOption.selected = true;

      const SortOptions = document.createElement("select");
      SortOptions.classList.add("options", "sortOptions");
      SortOptions.style.appearance = "none";
      SortOptions.style.backgroundImage = selectArrow("var(--primary-text)");
      SortOptions.style.backgroundRepeat = "no-repeat";
      SortOptions.style.backgroundPosition = "right 10px center";

      const defaultSortOption = document.createElement("option");
      defaultSortOption.id = "optionText";
      defaultSortOption.innerText = "Sort by";
      defaultSortOption.disabled = true;
      defaultSortOption.selected = true;

      const sortAscending = document.createElement("option");
      sortAscending.id = "sortAscending";
      sortAscending.value = "asc";
      sortAscending.innerText = "Date ascending";

      const sortDescending = document.createElement("option");
      sortDescending.id = "sortDescending";
      sortDescending.value = "desc";
      sortDescending.innerText = "Date descending";

      const filterByTitle = document.createElement("option");
      filterByTitle.id = "filterByTitle";
      filterByTitle.value = "filter_title";
      filterByTitle.innerText = "Filter by title";

      SortOptions.appendChild(defaultSortOption);
      SortOptions.appendChild(sortAscending);
      SortOptions.appendChild(sortDescending);

      FilterOptions.appendChild(defaultFilterOption);
      FilterOptions.appendChild(filterByTitle);

      optionsContainer.appendChild(FilterOptions);
      optionsContainer.appendChild(SortOptions);
      filtersContainer.prepend(optionsContainer);

      // Manage active/inactive filters
      manageFilterEvents(
        onSortChange,
        onFilterChange,
        FilterOptions,
        SortOptions
      );
    }
  } catch (error) {
    alertMessage("Couldn't display filters");
    throw new Error(`Error occurred: ${error.message}`);
  }
}
