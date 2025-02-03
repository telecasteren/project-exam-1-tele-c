import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export async function onFilterChange(filterType) {
  const filtersContainer = document.querySelector(".filtersContainer");
  const container = document.querySelector(".blogListContent");
  const expandMoreBtn = document.querySelector(".expandPosts");

  const existingError = filtersContainer.querySelector(".errorWrapper");
  if (existingError) existingError.remove();

  try {
    const posts = Array.from(container.children).filter((child) =>
      child.querySelector(".titleBlob")
    );

    if (filterType === "filter_title") {
      if (posts.length === 0) {
        const errorMessage = ErrorWrapper("No posts to filter");
        filtersContainer.appendChild(errorMessage);
        return;
      }

      // Filter posts based on their titles
      const filteredPosts = posts.sort((a, b) => {
        const titleA = a.querySelector(".titleBlob").innerText || "";
        const titleB = b.querySelector(".titleBlob").innerText || "";

        return titleA.localeCompare(titleB);
      });

      container.innerHTML = "";

      filteredPosts.forEach((post) => {
        container.appendChild(post);
      });

      // Re-append the expandMoreBtn
      container.appendChild(expandMoreBtn);
    }
  } catch (error) {
    const errorMessage = ErrorWrapper(
      `An error occurred when filtering by ${filterType}`
    );
    filtersContainer.appendChild(errorMessage);

    throw new Error(`Error occurred whilst filtering: ${error.message}`);
  }
}
