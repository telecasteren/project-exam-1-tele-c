export function returnCommentsPayload() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");

  const authorName = document.querySelector("#authorName").value;
  const authorEmail = document.querySelector("#authorEmail").value;
  const commentMessage = document.querySelector("#commentMessage").value;

  const commentContent = {
    postId: postId,
    authorName: authorName,
    authorEmail: authorEmail,
    content: commentMessage,
  };

  return commentContent;
}
