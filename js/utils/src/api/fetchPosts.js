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
      : `${baseUrl}&per_page=${perPage}&page=${page}&order=${sortOrder}&orderby=${sortBy}`;

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

      // Sort default from newest to oldest
      posts.sort((a, b) => {
        if (sortBy === "date") {
          return sortOrder === "desc"
            ? new Date(a.publishDate) - new Date(b.publishDate)
            : new Date(b.publishDate) - new Date(a.publishDate);
        } else if (sortBy === "title") {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
      });

      return posts;
    }
  } catch (error) {
    throw new Error(`Error occurred in API call: ${error.message}`);
  }
}
