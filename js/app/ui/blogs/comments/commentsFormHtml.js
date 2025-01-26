import { submitEvents } from "/js/app/eventListeners/blogs/commentEvents.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import {
  emailValidation,
  MinLengthValidation,
} from "/js/app/ui/components/contactForm/formValidation.js";

export function commentsFormHtml() {
  const postContainer = document.querySelector(".post-container");

  const commentDiv = document.createElement("div");
  commentDiv.id = "commentDiv";

  const commentToggle = document.createElement("h2");
  commentToggle.id = "commentToggle";
  commentToggle.innerText = "Comment on post";

  const commentForm = document.createElement("div");
  commentForm.className = "commentForm";
  commentForm.style.display = "none";

  const authorName = document.createElement("input");
  authorName.type = "text";
  authorName.id = "authorName";
  authorName.setAttribute("required", "");
  authorName.placeholder = "your nickname";

  const authorEmail = document.createElement("input");
  authorEmail.type = "email";
  authorEmail.id = "authorEmail";
  authorEmail.setAttribute("required", "");
  authorEmail.placeholder = "your email";

  const message = document.createElement("textarea");
  message.id = "commentMessage";
  message.rows = 15;

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submitCommentBtn";
  submitBtn.value = "Submit";

  commentForm.appendChild(authorName);
  commentForm.appendChild(authorEmail);
  commentForm.appendChild(message);
  commentForm.appendChild(submitBtn);
  commentDiv.appendChild(commentForm);
  commentDiv.appendChild(commentToggle);
  postContainer.appendChild(commentDiv);

  // Validate input values
  emailValidation(authorEmail);
  MinLengthValidation(authorName, 3, "Name must be at least 3 characters.");
  MinLengthValidation(message, 10, "Message must be at least 10 characters.");

  function isInputsValid() {
    return (
      authorEmail.checkValidity() &&
      authorName.checkValidity() &&
      message.checkValidity()
    );
  }

  // Calling events
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (isInputsValid()) {
      submitEvents();
    } else {
      alertMessage(
        `Please fill out the form correctly,
        and try again 👻`,
        "warning"
      );
    }
  });

  commentToggle.addEventListener("click", () => {
    commentForm.style.display = "block";
    commentToggle.style.display = "none";
    document
      .getElementById("commentDiv")
      .scrollIntoView({ behavior: "smooth" });
  });
}
