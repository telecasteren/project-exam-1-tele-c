import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { blogListHtml } from "/js/app/ui/blogs/blogListHtml.js";
import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export async function onSortChange(sortOrder) {
  const blogListContent = document.querySelector(".blogListContent");
  const filtersContainer = document.querySelector(".filtersContainer");

  let errorMessage = filtersContainer.querySelector(".errorWrapper");
  if (!errorMessage) {
    errorMessage = ErrorWrapper();
  }

  try {
    const sortedPosts = await fetchPostsWithInfo(null, sortOrder);

    blogListContent.innerHTML = "";
    blogListHtml(sortedPosts);

    errorMessage.innerHTML = "";
  } catch (error) {
    if (!filtersContainer.contains(errorMessage)) {
      filtersContainer.appendChild(errorMessage);
      errorMessage.innerHTML = `<div class="error">Couldn't sort the posts ${sortOrder}</div>`;
    }

    throw error;
  }
}
