import { fetchPostsWithInfo, allPosts } from "/js/utils/src/api/fetchPosts.js";
import {
  defaultPostDesc,
  defaultDescFallback,
  defaultDescriptions,
} from "/js/utils/general/constants.js";

function getPostId(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export async function setMetaDescriptions() {
  const path = window.location.pathname;

  let metaDescription = Object.keys(defaultDescriptions).find((key) =>
    path.includes(key)
  )
    ? defaultDescriptions[
        Object.keys(defaultDescriptions).find((key) => path.includes(key))
      ]
    : defaultDescFallback;

  if (path.includes("/post/")) {
    const postId = getPostId("postId");

    if (postId) {
      const numericPostId = Number(postId);
      let post = allPosts.find((p) => p.id === numericPostId);

      if (!post) {
        try {
          post = await fetchPostsWithInfo(numericPostId);
          if (post) allPosts.push(post);
        } catch (error) {
          console.error(
            `setMetaDescriptions(): Error fetching post with ID ${postId}.`,
            error
          );
        }
      }

      if (post) {
        metaDescription = `${post.title} - ${defaultPostDesc}`;
      } else {
        metaDescription = "Discover the latest writing and stories on Unwired";
        console.warn(
          `setMetaDescriptions(): Failed to fetch post with ID ${postId}. Fallback initiated.`
        );
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
