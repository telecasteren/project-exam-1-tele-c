import { loader, postContainer } from "/js/utils/general/constants.js";
import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { displayPostImageInModal } from "/js/app/eventListeners/blogs/blogModalEvents.js";

export async function createPostHtml() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");

    if (!postId) {
      throw new Error("Post ID is missing in the URL");
    }

    const post = await fetchPostsWithInfo(postId);

    loader.style.display = "none";

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("container", "postContent");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    const contentTitle = document.createElement("h1");
    contentTitle.classList.add("contentTitle");
    contentTitle.id = "contentTitle";
    contentTitle.innerText = post.title;

    const contentText = document.createElement("p");
    contentText.classList.add("contentText");
    contentText.innerHTML = post.textContent;

    const blogImg = document.createElement("img");
    blogImg.classList.add("blogImg");
    blogImg.src = post.imgSrc;
    blogImg.alt = post.imgAlt;

    const postFooter = document.createElement("p");
    postFooter.classList.add("postFooter");
    postFooter.innerText = `Published: ${new Date(
      post.publishDate
    ).toLocaleDateString()}`;

    // Initial hierarchy
    textContainer.appendChild(contentTitle);
    textContainer.appendChild(contentText);
    textContainer.appendChild(postFooter);

    contentContainer.appendChild(textContainer);
    contentContainer.appendChild(blogImg);
    postContainer.appendChild(contentContainer);

    // If screen size <= 1100px, reorder container hierarchy
    function smallerScreens(changeEvent) {
      contentContainer.setAttribute("aria-live", "polite");

      const smallScreens = changeEvent
        ? changeEvent.matches
        : window.matchMedia("(max-width: 1100px)").matches;

      contentContainer.innerHTML = "";

      if (smallScreens) {
        contentContainer.appendChild(blogImg);
        contentContainer.appendChild(contentTitle);
        contentContainer.appendChild(textContainer);
      } else {
        textContainer.appendChild(contentTitle);
        textContainer.appendChild(contentText);
        textContainer.appendChild(postFooter);
        contentContainer.appendChild(textContainer);
        contentContainer.appendChild(blogImg);
      }
    }

    const screenSizeChanges = window.matchMedia("(max-width: 1100px)");
    screenSizeChanges.addEventListener("change", smallerScreens);

    smallerScreens();
    displayPostImageInModal();
  } catch (error) {
    alertMessage("Woops! Can't show post. Try again later", "warning");
    throw new Error(`Error occurred creating post: ${error.message}`);
  }
}
