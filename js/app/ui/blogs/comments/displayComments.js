import { fetchComments } from "/js/utils/src/api/comments/fetchComments.js";
import { postContainer } from "/js/utils/general/constants.js";
import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export async function displayComments(postId) {
  try {
    const commentData = await fetchComments(postId);

    let commentsContainer = document.querySelector(".commentsContainer");
    if (!commentsContainer) {
      commentsContainer = document.createElement("div");
      commentsContainer.className = "commentsContainer";
      postContainer.appendChild(commentsContainer);
    }

    const existingError = commentsContainer.querySelector(".errorWrapper");
    if (existingError) existingError.remove();

    if (commentData.length === 0) {
      commentsContainer.style.display = "none";
    } else {
      commentsContainer.style.display = "block";

      commentData.forEach((comment) => {
        const commentContent = document.createElement("div");
        commentContent.className = "commentContent";

        const commentAuthor = document.createElement("h4");
        commentAuthor.className = "commentAuthor";
        commentAuthor.innerText = `Name: ${comment.author_name}`;

        const commentMessage = document.createElement("p");
        commentMessage.className = "commentMessage";
        commentMessage.innerHTML = comment.content.rendered;

        const commentDate = document.createElement("p");
        commentDate.className = "commentDate";
        const formattedDate = new Date(comment.date).toLocaleDateString();
        const formattedTime = new Date(comment.date).toLocaleTimeString();
        commentDate.innerText = `Published: ${formattedDate} ${formattedTime}`;

        commentContent.appendChild(commentAuthor);
        commentContent.appendChild(commentMessage);
        commentContent.appendChild(commentDate);
        commentsContainer.prepend(commentContent);
      });
    }
  } catch (error) {
    let commentsContainer = document.querySelector(".commentsContainer");
    if (!commentsContainer) {
      commentsContainer = document.createElement("div");
      commentsContainer.className = "commentsContainer";
      postContainer.appendChild(commentsContainer);
    }

    const errorMessage = ErrorWrapper("Error occurred when fetching comments.");
    commentsContainer.appendChild(errorMessage);
    throw error;
  }
}
