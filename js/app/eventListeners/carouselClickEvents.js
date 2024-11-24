import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function carouselClickEvents() {
  const carouselContainer = document.querySelector(".carousel-container");
  const blogTitle = document.querySelector(".carouselTitle");
  const carouselIMG = document.querySelector(".carouselIMG");

  if (!carouselContainer) {
    console.error("carouselContainer not found.");
    return;
  }

  carouselContainer.addEventListener("click", (event) => {
    if (event.target === blogTitle || event.target === carouselIMG) {
      goToPost();
    }
  });
}
