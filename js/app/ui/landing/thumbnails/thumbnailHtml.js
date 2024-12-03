import { fetchPostsWithImages } from "/js/utils/helpers/api/fetchPosts.js";
import { alertMessage } from "/js/app/ui/components/messages/alertMessage.js";
import { thumbnailContainer, loader } from "/js/utils/general/constants.js";
import { thumbnailClicks } from "/js/app/eventListeners/thumbnailEvents.js";

export async function thumbnailHtml() {
  try {
    const posts = await fetchPostsWithImages();

    loader.style.display = "none";

    const container = document.createElement("div");
    container.classList.add("container", "blogListContent");

    posts.forEach((post) => {
      const thumbnails = document.createElement("div");
      thumbnails.classList.add("thumbnails");

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

    thumbnailContainer.appendChild(container);
    container.appendChild(expandPosts);

    thumbnailClicks();
  } catch (error) {
    alertMessage("Couldn't fetch bloglist right now", "error");
    throw error;
  }
}
