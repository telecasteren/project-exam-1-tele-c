// Redirect to specific posts
export function goToPost(postID) {
  if (postID) {
    window.location.href = `/blog/post/?postId=${postID}`;
  }
}
