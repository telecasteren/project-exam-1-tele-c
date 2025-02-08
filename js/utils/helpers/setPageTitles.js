import { fetchPostsWithInfo, allPosts } from "/js/utils/src/api/fetchPosts.js";

function getQueryParams(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export async function setPageTitles() {
  const path = window.location.pathname;

  const pageTitles = {
    "/about/": "unwired | About",
    "/writing/": "unwired | Writing",
    "/contact/": "unwired | Contact",
  };

  let pageTitle = Object.keys(pageTitles).find((key) => path.includes(key))
    ? pageTitles[Object.keys(pageTitles).find((key) => path.includes(key))]
    : "unwired | Home";

  if (path.includes("/post/")) {
    const postId = getQueryParams("postId");

    if (postId) {
      const numericPostId = Number(postId);
      let post = allPosts.find((p) => p.id === numericPostId);

      if (!post) {
        try {
          post = await fetchPostsWithInfo(numericPostId);
          if (post) allPosts.push(post);
        } catch (error) {
          console.error(
            `setPageTitles(): Error fetching post with ID ${postId}.`,
            error
          );
        }
      }

      if (post) {
        pageTitle = `unwired | ${post.title}` || "unwired | Article";
      } else {
        pageTitle = "unwired | Article";
        console.warn(
          `setPageTitles(): Failed to fetch post with ID ${postId}. Fallback initiated.`
        );
      }
    }
  }

  document.title = pageTitle;
}
