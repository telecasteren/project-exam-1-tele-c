export function createCommentsHtml() {
  const commentDiv = document.createElement("div");

  const commentToggle = document.createElement("h3");
  commentToggle.id = "commentToggle";
  commentToggle.innerText = "Comment on post";

  const commentForm = document.createElement("div");
  commentForm.style.display = "none";

  const authorName = document.createElement("input");
  authorName.type = "text";
  authorName.id = "authorName";

  const authorEmail = document.createElement("input");
  authorEmail.type = "email";
  authorEmail.id = "authorEmail";

  const message = document.createElement("input");
  message.type = "textarea";
  message.id = "commentMessage";

  commentToggle.addEventListener("click", () => {
    commentForm.style.display = "block";
  });

  commentForm.appendChild(authorName);
  commentForm.appendChild(authorEmail);
  commentForm.appendChild(message);
  commentDiv.appendChild(commentForm);
  commentDiv.appendChild(commentToggle);
}
