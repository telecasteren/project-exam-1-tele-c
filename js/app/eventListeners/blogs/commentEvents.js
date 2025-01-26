import { submitCommentPayload } from "/js/utils/src/api/comments/submitComment.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";

export function submitEvents() {
  const message = document.querySelector("#commentMessage");
  const commentToggle = document.querySelector("#commentToggle");
  const commentForm = document.querySelector(".commentForm");

  if (message.value.length > 0) {
    submitCommentPayload();
    commentToggle.style.display = "block";
    commentForm.style.display = "none";
  } else {
    alertMessage("You need to write the comment first 😉", "info");
  }
}
