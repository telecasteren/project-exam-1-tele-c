import { handlePost } from "/js/utils/src/handlers/postHandler.js";
import { baseUrl } from "/js/utils/src/helpers/endpoints.js";

// Setting expiry time for cached data
export let allPosts = [];
let lastFetchedTime = 0;
const CACHE_EXPIRY_TIME = 24 * 60 * 60 * 1000;

export async function fetchPostsWithInfo(
  id,
  sortOrder = "desc",
  sortBy = "date",
  perPage = 10,
  page = 1
) {
  try {
    const currentTime = Date.now();
    const isExpired = currentTime - lastFetchedTime > CACHE_EXPIRY_TIME;

    const cachedTime = sessionStorage.getItem("lastFetchedTime");
    const cachedData = sessionStorage.getItem("allPosts");

    if (cachedData && cachedTime && !isExpired) {
      allPosts = JSON.parse(cachedData);
      lastFetchedTime = parseInt(cachedTime, 10);
      console.log("Returning cached posts");
      return allPosts;
    }

    const url = id
      ? `https://unwired.telecasternilsen.com/wp-json/wp/v2/posts/${id}?_embed`
      : `${baseUrl}&per_page=${perPage}&page=${page}&status=publish&order=${sortOrder}&orderby=${sortBy}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (id) {
      // Single post
      return handlePost(data);
    } else {
      // Multiple posts
      const posts = data.map(handlePost);

      // Merging data with global cache
      allPosts = [
        ...allPosts,
        ...posts.filter((post) => !allPosts.some((p) => p.id === post.id)),
      ];

      sessionStorage.setItem("allPosts", JSON.stringify(allPosts));
      sessionStorage.setItem("lastFetchedTime", currentTime.toString());

      return posts;
    }
  } catch (error) {
    throw new Error(`Error occurred in API call: ${error.message}`);
  }
}
