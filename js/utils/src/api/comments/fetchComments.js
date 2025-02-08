export async function fetchComments(postId) {
  try {
    const response = await fetch(
      `https://unwired.telecasternilsen.com/wp-json/wp/v2/comments?post=${postId}&orderby=date`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let comments = await response.json();
    comments = comments.sort((a, b) => new Date(a.date) - new Date(b.date));

    return comments;
  } catch (error) {
    console.error(`fetchComments(): Error fetching comments: ${error.message}`);
    return [];
  }
}
