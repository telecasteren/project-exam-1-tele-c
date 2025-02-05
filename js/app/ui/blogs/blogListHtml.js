import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { blogListContainer, loader } from "/js/utils/general/constants.js";
import { createThumbnails } from "/js/app/ui/blogs/thumbnails/thumbnails.js";
import { thumbnailClicks } from "/js/app/eventListeners/blogs/thumbnailEvents.js";
import { expandMorePosts } from "/js/app/eventListeners/blogs/expandMore.js";

// Initialise blogList
export async function initialiseBlogList() {
  try {
    const posts = await fetchPostsWithInfo();
    blogListHtml(posts);
  } catch (error) {
    throw new Error(`Error occurred loading initial posts: ${error.message}`);
  }
}

export async function blogListHtml(posts, append = false) {
  try {
    loader.style.display = "none";

    const blogListSection = document.querySelector(".blogList-section");
    if (!blogListSection.querySelector(".blogListTitle")) {
      const blogListTitle = document.createElement("h1");
      blogListTitle.className = "blogListTitle";
      blogListTitle.innerText = "Articles";
      blogListSection.prepend(blogListTitle);
    }

    let container = blogListContainer.querySelector(".blogListContent");
    if (!container) {
      container = document.createElement("div");
      container.classList.add("container", "blogListContent");
      blogListContainer.appendChild(container);
    }

    if (!append) {
      container.innerHTML = "";
    }

    posts.forEach((post) => {
      const thumbnails = createThumbnails(post);

      const thumbnailContainer = document.createElement("div");
      thumbnailContainer.className = "thumb-container";

      // TEST
      const titleBlob = document.createElement("p");
      titleBlob.classList.add("titleBlob");
      titleBlob.innerText = post.title;
      thumbnailContainer.appendChild(titleBlob);
      //TEST END

      thumbnailContainer.appendChild(thumbnails);
      container.appendChild(thumbnailContainer);
    });

    if (!append && !document.querySelector(".expandPosts")) {
      const expandPosts = document.createElement("h2");
      expandPosts.classList.add("expandPosts");
      expandPosts.innerText = "View more";

      container.appendChild(expandPosts);

      expandPosts.addEventListener("click", () => {
        expandMorePosts();
        expandPosts.style.display = "none";
      });
    }

    thumbnailClicks();
  } catch (error) {
    alertMessage("Couldn't fetch the articles right now", "error");
    throw new Error(`Error occurred creating BlogList: ${error.message}`);
  }
}
