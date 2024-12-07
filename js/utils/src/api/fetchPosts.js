import {
  NO_IMAGE_FOUND_IMG,
  ALT_NOT_FOUND,
} from "/js/utils/general/constants.js";

const baseUrl =
  "https://unwired.telecasternilsen.com/wp-json/wp/v2/posts?_embed";

export async function fetchPostsWithInfo(id) {
  try {
    const url = id
      ? `https://unwired.telecasternilsen.com/wp-json/wp/v2/posts/${id}?_embed`
      : baseUrl;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const handlePost = (post) => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      const categories = post._embedded?.["wp:term"]?.[0];

      // Returning everything we need in relation to the posts
      return {
        id: post.id,
        title: post.title.rendered,
        textContent: post.content.rendered,
        publishDate: post.date,
        postCategory: categories
          ? categories.map((cat) => cat.name).join(", ")
          : "Uncategorized",
        imgSrc: featuredMedia?.source_url || NO_IMAGE_FOUND_IMG,
        imgAlt: featuredMedia?.alt_text || ALT_NOT_FOUND,
      };
    };

    if (id) {
      // Single post
      return handlePost(data);
    } else {
      // Multiple posts
      return data.map(handlePost);
    }
  } catch (error) {
    console.error("Error fetching posts with images:", error);
    throw error;
  }
}
