import { commentsUrl, proxyUrl } from "/js/utils/src/helpers/endpoints.js";
import { commentsCredentials } from "/js/utils/src/helpers/secrets.js";
import { returnCommentsPayload } from "/js/app/ui/blogs/comments/returnCommentsPayload.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { contactAuthorLink } from "/js/utils/general/constants.js";

function getPostId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("postId");
}

async function submitComment(payload) {
  const proxiedCommentsUrl = proxyUrl + commentsUrl;
  if (!proxiedCommentsUrl) {
    console.error("submitComment(): Invalid API URL.");
    return;
  }

  try {
    const response = await fetch(proxiedCommentsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${commentsCredentials}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      await response.json();
      alertMessage("Thank you for your comment! 👾", "info");
    } else {
      const errorText = await response.text();
      console.error(
        `submitComment(): Error submitting comment: ${response.status}`,
        errorText
      );
      alertMessage(
        "Unexpected error when submitting comment. Please try again.",
        "error"
      );
    }
  } catch (error) {
    console.error("submitComment(): Error submitting comment", error);
    alertMessage(
      `Oops, that didn't work 😬\nPlease contact the author ${contactAuthorLink}.`,
      "error",
      true
    );
  }
}

export function submitCommentPayload() {
  const postID = getPostId();
  if (!postID) {
    console.warn("submitCommentPayload: No postID found in the URL.");
    alertMessage("Oops! Couldn't find which post to comment on.", "warning");
    return;
  }

  const commentData = returnCommentsPayload();

  if (
    !commentData.authorName ||
    !commentData.authorEmail ||
    !commentData.content
  ) {
    alertMessage("Please fill out all the fields.", "warning");
    return;
  }

  const payload = {
    post: postID,
    author_name: commentData.authorName.trim(),
    author_email: commentData.authorEmail.trim(),
    content: commentData.content.trim(),
  };

  submitComment(payload);
}
