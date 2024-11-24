import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function thumbnailClicks() {
  const thumbnails = document.querySelectorAll(".thumbnails");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      goToPost();
    });
  });
}
