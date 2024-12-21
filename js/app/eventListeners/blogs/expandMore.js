import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { blogListHtml } from "/js/app/ui/blogs/blogListHtml.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { loader } from "/js/utils/general/constants.js";

let currentPage = 1;
const perPage = 10;

export async function expandMorePosts() {
  const expandMoreBtn = document.querySelector(".expandPosts");
  const alreadyFetchedPostIds = new Set();

  try {
    loader.style.display = "block";

    const newPosts = await fetchPostsWithInfo(
      null,
      "desc",
      "date",
      perPage,
      currentPage + 1
    );

    if (Array.isArray(newPosts) && newPosts.length > 0) {
      const uniquePosts = newPosts.filter(
        (post) => !alreadyFetchedPostIds.has(post.id)
      );

      if (uniquePosts.length > 0) {
        uniquePosts.forEach((post) => alreadyFetchedPostIds.add(post.id));
      }

      currentPage++;

      blogListHtml(newPosts, true);
    } else if (Array.isArray(newPosts) && newPosts.length <= 0) {
      expandMoreBtn.style.display = "none";
      console.log("No more posts to display");
    }
  } catch (error) {
    alertMessage("No more posts to display now");
    throw new Error("Failed to fetch additional posts");
  } finally {
    loader.style.display = "none";
  }
}
