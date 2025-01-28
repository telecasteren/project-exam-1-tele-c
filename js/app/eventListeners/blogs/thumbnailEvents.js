import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function thumbnailClicks() {
  const thumbnails = document.querySelectorAll(".thumbnails");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const postID = thumb.dataset.postId;
      if (postID) {
        goToPost(postID);
      } else {
        throw new Error(
          `Error, post ID is missing on the thumbnail: ${error.message}`
        );
      }
    });
  });
}
