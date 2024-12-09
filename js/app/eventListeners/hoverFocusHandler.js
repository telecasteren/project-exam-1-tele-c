export function hoverFocusHandler(blogTitle, allItems) {
  const carouselImgs = Array.from(document.querySelectorAll(".carouselIMG"));

  let currentFocusedPost = document.querySelector(".focusedPost");
  let hoveredPost = null;

  carouselImgs.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      if (currentFocusedPost) {
        currentFocusedPost.classList.remove("focusedPost");
      }

      img.classList.add("focusedPost");
      currentFocusedPost = img;

      // Update the title to the image that is hovered
      const hoveredIndex = img.dataset.index;
      blogTitle.innerText = allItems[hoveredIndex]?.title || "Title unknown";
      blogTitle.dataset.postId = allItems[hoveredIndex]?.id || "";

      hoveredPost = img;
    });

    img.addEventListener("mouseleave", () => {
      if (hoveredPost && hoveredPost !== img) {
        hoveredPost.classList.add("focusedPost");

        // Revert back to the initial focused post
        const focusedIndex = currentFocusedPost.dataset.index;
        blogTitle.innerText = allItems[focusedIndex]?.title || "Title unknown";
        blogTitle.dataset.postId = allItems[focusedIndex]?.id || "";
      } else {
        // Return the focus to the first post in the carousel
        const firstPost = carouselImgs[0];
        if (firstPost) {
          firstPost.classList.add("focusedPost");
          currentFocusedPost = firstPost;

          // Update the blog title to match the first post above
          blogTitle.innerText = allItems[0]?.title || "Title unknown";
          blogTitle.dataset.postId = allItems[0]?.id || "";
        }
      }

      img.classList.remove("focusedPost");
      hoveredPost = null;
    });
  });
}
