import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export function onSortChange(sortOrder) {
  const blogListContent = document.querySelector(".blogListContent");
  const filtersContainer = document.querySelector(".filtersContainer");

  let errorMessage = filtersContainer.querySelector(".errorWrapper");
  if (!errorMessage) {
    errorMessage = ErrorWrapper();
  }

  try {
    const posts = Array.from(blogListContent.children);

    if (posts.length === 0) {
      errorMessage.innerHTML = `<div class="error">No posts to sort</div>`;
      if (!filtersContainer.contains(errorMessage)) {
        filtersContainer.appendChild(errorMessage);
      }
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

    errorMessage.innerHTML = "";
  } catch (error) {
    if (!filtersContainer.contains(errorMessage)) {
      filtersContainer.appendChild(errorMessage);
      errorMessage.innerHTML = `<div class="error">Couldn't sort the posts ${sortOrder}</div>`;
    }

    throw new error();
  }
}
