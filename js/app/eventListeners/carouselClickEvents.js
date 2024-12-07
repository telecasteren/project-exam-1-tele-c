import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function carouselClickEvents() {
  const carouselContainer = document.querySelector(".carousel-container");

  if (!carouselContainer) {
    console.error("carouselContainer not found.");
    return;
  }

  carouselContainer.addEventListener("click", (event) => {
    const target = event.target;
    const postID = target.dataset.postId;

    if (postID) {
      goToPost(postID);
    }
  });
}
