export async function fetchComments(postId) {
  try {
    const response = await fetch(
      `https://unwired.telecasternilsen.com/wp-json/wp/v2/comments?post=${postId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error(`Error fetching comments: ${error.message}`);
    return [];
  }
}
