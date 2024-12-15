import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function carouselClickEvents() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.querySelector(".carousel");
  const slideLeft = document.querySelector(".slideLeft");
  const slideRight = document.querySelector(".slideRight");

  const scrollLength = 300;

  slideLeft.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollLength, behavior: "smooth" });
  });

  slideRight.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollLength, behavior: "smooth" });
  });

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
