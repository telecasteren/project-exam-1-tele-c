import { goToPost } from "/js/app/eventListeners/goToPost.js";

export function thumbnailClicks() {
  const thumbnails = document.querySelectorAll(".thumbnails");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const postID = thumb.dataset.postId;
      if (postID) {
        goToPost(postID);
      } else {
        console.error("Post ID is missing on the thumbnail");
        throw new Error(
          `Error, post ID is missing on the thumbnail: ${error.message}`
        );
      }
    });
  });
}

export function displayTitleBlob(post) {
  document.addEventListener("mouseover", (event) => {
    const thumbnail = event.target.closest(".thumbnails");

    if (thumbnail) {
      let titleBlob = thumbnail.querySelector(".titleBlob");

      if (!titleBlob) {
        const titleBlob = document.createElement("p");
        titleBlob.classList.add("titleBlob");
        titleBlob.innerText = post.title;
      }
      titleBlob.style.opacity = "1";
    }
  });

  document.addEventListener("mouseout", (event) => {
    const thumbnail = event.target.closest(".thumbnails");

    if (thumbnail) {
      const titleBlob = thumbnail.querySelector(".titleBlob");

      if (titleBlob) {
        titleBlob.style.opacity = "0";
      }
    }
  });
}
