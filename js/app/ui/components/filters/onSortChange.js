import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export function onSortChange(sortOrder) {
  const blogListContent = document.querySelector(".blogListContent");
  const filtersContainer = document.querySelector(".filtersContainer");

  const existingError = filtersContainer.querySelector(".errorWrapper");
  if (existingError) existingError.remove();

  try {
    const posts = Array.from(blogListContent.children);

    if (posts.length === 0) {
      const errorMessage = ErrorWrapper("No posts to filter");
      filtersContainer.appendChild(errorMessage);
      return;
    }

    // Sort the posts on publish date
    const sortedPosts = posts.sort((a, b) => {
      const dateA = a.querySelector(".thumbnails")
        ? new Date(a.querySelector(".thumbnails").dataset.publishDate).getTime()
        : null;
      const dateB = b.querySelector(".thumbnails")
        ? new Date(b.querySelector(".thumbnails").dataset.publishDate).getTime()
        : null;

      if (dateA === null || dateB === null) return 0;

      if (sortOrder === "asc") {
        return dateA - dateB;
      } else if (sortOrder === "desc") {
        return dateB - dateA;
      }
    });

    blogListContent.innerHTML = "";

    sortedPosts.forEach((post) => {
      blogListContent.appendChild(post);
    });
  } catch (error) {
    const errorMessage = ErrorWrapper(
      `An error occurred when filtering by ${filterType}`
    );
    filtersContainer.appendChild(errorMessage);

    throw new Error(`Error occurred whilst sorting: ${error.message}`);
  }
}
