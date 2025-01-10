import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";

export async function setMetaDescriptions() {
  const path = window.location.pathname;
  const defaultDescriptions = {
    "/about/": "Learn about the story behind Unwired and its creator.",
    "/stories/": "Explore Unwired's collection of non-selling stories.",
    "/contact/": "Get in touch with us at Unwired for inquiries or feedback.",
  };

  let metaDescription = Object.keys(defaultDescriptions).find((key) =>
    path.includes(key)
  )
    ? defaultDescriptions[
        Object.keys(defaultDescriptions).find((key) => path.includes(key))
      ]
    : "Welcome to Unwired, your source for low key writing and average insights";

  if (path.includes("/post/")) {
    const postId = getQueryParams("postId");

    if (postId) {
      const allPosts = await fetchPostsWithInfo();
      const numericPostId = Number(postId);
      const post = allPosts.find((p) => p.id === numericPostId);

      if (post) {
        metaDescription = `${post.title} - ${
          post.shortDescription || "Read more on Unwired's blog"
        }`;
      } else {
        metaDescription = "Discover the latest writing and stories on Unwired";
        console.warn(`Post with id: ${postId} not found`);
      }
    }
  }

  let metaTag = document.querySelector("meta[name='description']");

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "description");
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute("content", metaDescription);
}
