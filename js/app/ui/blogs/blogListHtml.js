import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { blogListContainer, loader } from "/js/utils/general/constants.js";
import { thumbnailClicks } from "/js/app/eventListeners/thumbnailEvents.js";

// Initialise blogList
export async function initialiseBlogList() {
  try {
    const posts = await fetchPostsWithInfo();
    blogListHtml(posts);
  } catch (error) {
    console.error("Error loading initial posts", error);
  }
}

export async function blogListHtml(posts) {
  try {
    loader.style.display = "none";

    let container = blogListContainer.querySelector(".blogListContent");
    if (!container) {
      container = document.createElement("div");
      container.classList.add("container", "blogListContent");
      blogListContainer.appendChild(container);
    } else {
      container.innerHTML = "";
    }

    posts.forEach((post) => {
      const thumbnails = document.createElement("div");
      thumbnails.classList.add("thumbnails");
      thumbnails.dataset.postId = post.id;

      const titleBlob = document.createElement("p");
      titleBlob.classList.add("titleBlob");
      titleBlob.innerText = post.title;

      const thumbImg = document.createElement("img");
      thumbImg.classList.add("thumbImg");
      thumbImg.src = post.imgSrc;
      thumbImg.alt = post.imgAlt;

      thumbnails.appendChild(titleBlob);
      thumbnails.appendChild(thumbImg);

      container.appendChild(thumbnails);
    });

    const expandPosts = document.createElement("h3");
    expandPosts.classList.add("expandPosts");
    expandPosts.innerText = "View more";

    blogListContainer.appendChild(container);
    container.appendChild(expandPosts);

    expandPosts.addEventListener("click", () => {
      console.log("expandPosts clicked");
    });

    thumbnailClicks();
  } catch (error) {
    alertMessage("Couldn't fetch the list of blogs right now", "error");
    throw error;
  }
}
