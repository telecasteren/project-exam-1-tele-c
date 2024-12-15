import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";
import { blogListHtml } from "/js/app/ui/blogs/blogListHtml.js";

export async function onFilterChange(filterType) {
  const filtersContainer = document.querySelector(".filtersContainer");
  let errorMessage = filtersContainer.querySelector(".errorWrapper");

  const container = document.querySelector(".blogListContent");

  if (!errorMessage) {
    errorMessage = ErrorWrapper();
    filtersContainer.appendChild(errorMessage);
  }

  try {
    let filteredPosts = [];

    if (filterType === "date") {
      filteredPosts = await fetchPostsWithInfo(null, "publishDate");

      filteredPosts = filteredPosts.sort((a, b) => {
        const dateNew = new Date(a.publishDate);
        const dateOld = new Date(b.publishDate);

        if (dateNew > dateOld) return -1;
        if (dateNew < dateOld) return 1;
        return 0;
      });

      container.innerHTML = "";
      blogListHtml(filteredPosts);

      errorMessage.innerHTML = "";
    } else if (filterType === "category") {
      const postsByCategory = await fetchPostsWithInfo();

      Object.keys(postsByCategory).forEach((categoryId) => {
        const categoryPosts = postsByCategory[categoryId];

        container.innerHTML = "";
        blogListHtml(categoryPosts);
      });

      errorMessage.innerHTML = "";
    }
  } catch (error) {
    console.error(`Error occurred while filtering by ${filterType}`);
    errorMessage.innerHTML = `<div class="error">An error occurred when filtering by ${filterType}</div>`;
    throw error;
  }
}
