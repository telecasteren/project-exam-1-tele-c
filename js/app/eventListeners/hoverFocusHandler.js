export function hoverFocusHandler() {
  const carouselImgs = Array.from(document.querySelectorAll(".carouselIMG"));

  let currentFocusedPost = document.querySelector(".focusedPost");

  carouselImgs.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      if (currentFocusedPost) {
        currentFocusedPost.classList.remove("focusedPost");
      }
      img.classList.add("focusedPost");
    });

    img.addEventListener("mouseleave", () => {
      if (currentFocusedPost && currentFocusedPost !== img) {
        currentFocusedPost.classList.add("focusedPost");
      }
      img.classList.remove("focusedPost");
    });
  });
}
