import { handlePost } from "/js/utils/src/handlers/postHandler.js";
import { baseUrl } from "/js/utils/src/helpers/endpoints.js";

export async function fetchPostsWithInfo(
  id,
  sortOrder = "desc",
  sortBy = "date",
  perPage = 10,
  page = 1
) {
  try {
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
      return posts;
    }
  } catch (error) {
    throw new Error(`Error occurred in API call: ${error.message}`);
  }
}
