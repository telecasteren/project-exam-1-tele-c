import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export async function onFilterChange(filterType) {
  const filtersContainer = document.querySelector(".filtersContainer");
  const container = document.querySelector(".blogListContent");
  const expandMoreBtn = document.querySelector(".expandPosts");

  let errorMessage = filtersContainer.querySelector(".errorWrapper");
  if (!errorMessage) {
    errorMessage = ErrorWrapper();
  }

  try {
    const posts = Array.from(container.children).filter((child) =>
      child.querySelector(".titleBlob")
    );

    if (filterType === "filter_title") {
      if (posts.length === 0) {
        errorMessage.innerHTML = `<div class="error">No titles to filter</div>`;
        if (!filtersContainer.contains(errorMessage)) {
          filtersContainer.appendChild(errorMessage);
        }
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

      errorMessage.innerHTML = "";
    }
  } catch (error) {
    console.error(`Error occurred while filtering by ${filterType}`);
    errorMessage.innerHTML = `<div class="error">An error occurred when filtering by ${filterType}</div>`;
    throw new Error(`Error occurred whilst filtering: ${error.message}`);
  }
}
