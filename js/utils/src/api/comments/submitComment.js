import { commentsUrl, proxyUrl } from "/js/utils/src/helpers/endpoints.js";
import { commentsCredentials } from "/js/utils/src/helpers/secrets.js";
import { returnComments } from "/js/app/ui/blogs/comments/returnComments.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { contactAuthorLink } from "/js/utils/general/constants.js";

export function submitCommentPayload() {
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("postId");

  const proxiedCommentsUrl = proxyUrl + commentsUrl;

  if (!postID) {
    console.warn("No postId found in the URL. Defaulting to 'unknown'.");
    alertMessage(
      `Oops! Couldn't find which post to comment.
    Please try again later.`,
      "warning"
    );
    return null;
  }

  const commentData = returnComments();

  const payload = {
    post: postID || "unknown",
    author_name: commentData.authorName,
    author_email: commentData.authorEmail,
    content: commentData.content,
  };

  const submitComment = async (payload) => {
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
        const data = await response.json();
        console.log("Comment submitted successfully:", data);
        alertMessage("Thank you for your comment! 👾", "info");
      } else {
        const errorText = await response.text();
        console.error(
          `Error submitting comment: ${response.status}`,
          errorText
        );
        alertMessage(
          "Unexpected error when submitting. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alertMessage(
        `Oops, that didn't work 😬
      Please contact the author ${contactAuthorLink}.`,
        "error",
        true
      );
    }
  };

  submitComment(payload);
}
