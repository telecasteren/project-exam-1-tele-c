import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";
import { blogListHtml } from "/js/app/ui/blogs/blogListHtml.js";

export async function onFilterChange(filterType) {
  // const filtersContainer = document.querySelector(".filtersContainer");
  // const container = document.querySelector(".blogListContent");
  // let errorMessage = filtersContainer.querySelector(".errorWrapper");
  // if (!errorMessage) {
  //   errorMessage = ErrorWrapper();
  //   filtersContainer.appendChild(errorMessage);
  // }
  // try {
  //   const posts = Array.from(blogListContent.children);
  //   if (filterType === "title") {
  //     if (posts.length === 0) {
  //       errorMessage.innerHTML = `<div class="error">No posts to sort</div>`;
  //       if (!filtersContainer.contains(errorMessage)) {
  //         filtersContainer.appendChild(errorMessage);
  //       }
  //       return;
  //     }
  //     // Filter the posts based on their titles
  //     const filteredPosts = posts.sort((a, b) => {
  //       const aTitle = a.querySelector(".titleBlob")
  //         ? a.querySelector(".titleBlob").innerText
  //         : "";
  //       const bTitle = b.querySelector(".titleBlob")
  //         ? b.querySelector(".titleBlob").innerText
  //         : "";
  //       if (sortOrder === "asc") {
  //         return aTitle.localeCompare(bTitle);
  //       } else if (sortOrder === "desc") {
  //         return bTitle.localeCompare(aTitle);
  //       }
  //     });
  //     container.innerHTML = "";
  //     filteredPosts.forEach((post) => {
  //       container.appendChild(post);
  //     });
  //     errorMessage.innerHTML = "";
  //   } else if (filterType === "category") {
  //     const postsByCategory = await fetchPostsWithInfo();
  //     Object.keys(postsByCategory).forEach((categoryId) => {
  //       const categoryPosts = postsByCategory[categoryId];
  //       container.innerHTML = "";
  //       blogListHtml(categoryPosts);
  //     });
  //     errorMessage.innerHTML = "";
  //   }
  // } catch (error) {
  //   console.error(`Error occurred while filtering by ${filterType}`);
  //   errorMessage.innerHTML = `<div class="error">An error occurred when filtering by ${filterType}</div>`;
  //   throw error;
  // }
}
