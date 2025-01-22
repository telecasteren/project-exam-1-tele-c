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
  const handleTitleVisibility = (event, action) => {
    const thumbnail = event.target.closest(".thumbnails");

    if (thumbnail) {
      let titleBlob = thumbnail.querySelector(".titleBlob");

      if (!titleBlob) {
        const titleBlob = document.createElement("p");
        titleBlob.classList.add("titleBlob");
        titleBlob.innerText = post.title;
      }

      if (window.matchMedia("(min-width: 1025px)").matches) {
        titleBlob.style.opacity = action === "show" ? "1" : "0";
      } else {
        titleBlob.style.opacity = "1";
      }
    }
  };

  const initialStateOfVisibility = () => {
    if (window.matchMedia("(min-width: 1025px)").matches) {
      const thumbnails = document.querySelectorAll(".thumbnails");
      thumbnails.forEach((thumbnail) => {
        const titleBlob = thumbnail.querySelector(".titleBlob");
        if (titleBlob) {
          titleBlob.style.opacity = "0";
        }
      });
    } else {
      const thumbnails = document.querySelectorAll(".thumbnails");
      thumbnails.forEach((thumbnail) => {
        const titleBlob = thumbnail.querySelector(".titleBlob");
        if (titleBlob) {
          titleBlob.style.opacity = "1";
        }
      });
    }
  };
  initialStateOfVisibility();

  document.addEventListener("mouseover", (event) => {
    handleTitleVisibility(event, "show");
  });

  document.addEventListener("mouseout", (event) => {
    handleTitleVisibility(event, "hide");
  });

  window.addEventListener("resize", () => {
    initialStateOfVisibility();
  });
}
