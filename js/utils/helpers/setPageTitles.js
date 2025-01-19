import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";

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
      const posts = await fetchPostsWithInfo();
      const postId = getQueryParams("postId");
      const numericPostId = Number(postId);
      const post = posts.find((p) => p.id === numericPostId);

      if (post) {
        pageTitle = `unwired | ${post.title}` || "unwired | Blog post";
      } else {
        pageTitle = "unwired | Blog post";
        console.warn(`Post with ID ${postId} not found`);
      }
    }
  }

  document.title = pageTitle;
}
