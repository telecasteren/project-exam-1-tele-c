import {
  NO_IMAGE_FOUND_IMG,
  ALT_NOT_FOUND,
} from "/js/utils/general/constants.js";

const baseUrl =
  "https://unwired.telecasternilsen.com/wp-json/wp/v2/posts?_embed";

// const username = "telecasteren";
// const password = "hT9V SruC Kynh INTY 67S7 VUzc";

export async function fetchPostsWithImages(id) {
  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;

    // const response = await fetch(url, {
    //   headers: {
    //     Authorization: "Basic " + btoa(`${username}:${password}`),
    //   },
    // });

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    const postsWithImages = posts.map((post) => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      return {
        id: post.id,
        title: post.title.rendered,
        textContent: post.content.rendered,
        // genre: post.categories.map((cat) => cat.name).join(", "),
        imgSrc: featuredMedia?.source_url || NO_IMAGE_FOUND_IMG,
        imgAlt: featuredMedia?.alt_text || ALT_NOT_FOUND,
      };
    });

    // console.log(postsWithImages);
    return postsWithImages;
  } catch (error) {
    // if (mainSection) {
    //   mainSection.innerHTML = `<div class="error">An error occurred when fetching posts..</div>`;
    //   console.error("Couldn't fetch posts, error: ", error);
    // }
    console.error("Error fetching posts with images:", error);
    throw error;
  }
}
fetchPostsWithImages();

// Helper to get post data parameters
// export function extractPostData(post) {
//   return {
//     id: post.id,
//     title: post.name,
//     textContent: post.content,
//     genre: post.categories.map((cat) => cat.name).join(", "),
//     imgSrc: post.images.length > 0 ? post.images[0].src : NO_IMAGE_FOUND_IMG,
//     imgAlt: post.images.length > 0 ? post.images[0].alt : POST_NOT_FOUND,
//   };
// }
