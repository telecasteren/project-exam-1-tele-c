export function returnComments(postID) {
  const postID = window.URLSearchParams(
    `/blog/post/index.html?postId=${postID}`
  );

  const authorName = document.querySelector("#authorName").value;
  const authorEmail = document.querySelector("#authorEmail").value;
  const commentMessage = document.querySelector("#commentMessage").value;

  const commentContent = {
    id: postID,
    name: authorName,
    email: authorEmail,
    content: commentMessage,
  };

  return commentContent;
}
