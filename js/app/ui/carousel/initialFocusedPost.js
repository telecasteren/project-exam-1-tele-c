export function initialFocusedPost(carousel, blogTitle, latestPosts) {
  const carouselImgs = Array.from(carousel.querySelectorAll(".carouselIMG"));
  const carouselRect = carousel.getBoundingClientRect();

  // Find the post in focus
  const focusedPost = carouselImgs.find((img) => {
    const imgRect = img.getBoundingClientRect();
    const imgCenter = imgRect.left + imgRect.width / 2;
    return imgCenter >= carouselRect.left && imgCenter <= carouselRect.right;
  });

  // Display the correct title
  // Show user what post is in focus by adding a style class
  if (focusedPost) {
    const focusedIndex = focusedPost.dataset.index;
    blogTitle.innerText = latestPosts[focusedIndex].title || "Title unknown";
    blogTitle.dataset.postId = latestPosts[focusedIndex].id;

    focusedPost.classList.add("focusedPost");

    carouselImgs.forEach((img) => {
      if (img !== focusedPost) {
        img.classList.remove("focusedPost");
      }
    });
  } else {
    carouselImgs.forEach((img) => img.classList.remove("focusedPost"));
  }
}
