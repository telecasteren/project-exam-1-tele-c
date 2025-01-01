export function manageFilterEvents(
  onSortChange,
  onFilterChange,
  FilterOptions,
  SortOptions
) {
  FilterOptions.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "filter_title") {
      onFilterChange("filter_title");
    }

    // Reset sortOption back to defaultSortOption
    const sortDropdown = document.querySelector(".sortOptions");
    sortDropdown.selectedIndex = 0;
  });

  SortOptions.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "asc" || selectedOption === "desc") {
      const sortOrder = selectedOption;
      onSortChange(sortOrder);
    }

    // Reset filterOption back to defaultFilterOption
    const filterDropdown = document.querySelector(".filterOptions");
    filterDropdown.selectedIndex = 0;
  });
}
