import { goToPost } from "/js/app/eventListeners/goToPost.js";
import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";
import { homeContainer } from "/js/utils/general/constants.js";

export function carouselClickEvents() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.querySelector(".carousel");
  const slideLeft = document.querySelector(".slideLeft");
  const slideRight = document.querySelector(".slideRight");

  const existingError = homeContainer.querySelector(".errorWrapper");
  if (existingError) existingError.remove();

  const scrollLength = 300;

  slideLeft.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollLength, behavior: "smooth" });
  });

  slideRight.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollLength, behavior: "smooth" });
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      slideLeft.click();
    } else if (event.key === "ArrowRight") {
      slideRight.click();
    }
  });

  if (!carouselContainer) {
    const errorMessage = ErrorWrapper(
      "An error occurred whilst loading featured posts"
    );
    homeContainer.appendChild(errorMessage);
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
