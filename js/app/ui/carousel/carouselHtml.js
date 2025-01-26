import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import {
  loader,
  homeContainer,
  NO_IMAGE_FOUND_IMG,
} from "/js/utils/general/constants.js";
import { carouselClickEvents } from "/js/app/eventListeners/carousel/carouselClickEvents.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { hoverFocusHandler } from "/js/app/eventListeners/carousel/hoverFocusHandler.js";
import { scrollHandler } from "/js/app/ui/carousel/scrollHandler.js";
import { setSpecificColors } from "/js/app/ui/components/topContent/colorMode/setSpecificColors.js";

export async function carouselHtml() {
  try {
    const posts = await fetchPostsWithInfo();

    loader.style.display = "none";

    const container = document.createElement("div");
    container.classList.add("carousel-container");
    container.setAttribute("role", "region");

    const carousel = document.createElement("div");
    carousel.classList.add("container", "carousel");

    const slideShowDiv = document.createElement("div");
    slideShowDiv.classList.add("slideShowDiv");

    const slideLeft = document.createElement("div");
    slideLeft.classList.add("slideLeft");
    slideLeft.setAttribute("role", "button");
    slideLeft.innerText = "<";

    const slideRight = document.createElement("div");
    slideRight.classList.add("slideRight");
    slideRight.setAttribute("role", "button");
    slideRight.innerText = ">";

    // Display only the 8 latest posts
    const latestPosts = posts
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 8);

    const blogTitle = document.createElement("h4");
    blogTitle.classList.add("carouselTitle");
    blogTitle.id = "carouselTitle";
    blogTitle.innerText = latestPosts[0].title || "Unknown title";

    latestPosts.forEach((post, index) => {
      const carouselIMG = document.createElement("img");
      carouselIMG.className = "carouselIMG";
      carouselIMG.src = post.imgSrc || NO_IMAGE_FOUND_IMG;
      carouselIMG.alt = post.imgAlt || `Image ${index + 1}`;
      carouselIMG.dataset.index = index;
      carouselIMG.dataset.postId = post.id;

      carousel.appendChild(carouselIMG);
    });

    slideShowDiv.appendChild(slideLeft);
    slideShowDiv.appendChild(slideRight);
    carousel.appendChild(slideShowDiv);

    container.appendChild(carousel);
    container.appendChild(blogTitle);
    homeContainer.appendChild(container);

    // Handling hover and focus events here
    hoverFocusHandler(blogTitle, latestPosts);

    // Handling scroll events here
    let scrollTimeout;
    // Bounce back to start
    carousel.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollHandler();
      }, 1000);
    });

    // // Track the focused post
    function initialFocusedPost() {
      const carouselImgs = Array.from(
        carousel.querySelectorAll(".carouselIMG")
      );
      const carouselRect = carousel.getBoundingClientRect();

      // Find the post in focus
      const focusedPost = carouselImgs.find((img) => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.left + imgRect.width / 2;
        return (
          imgCenter >= carouselRect.left && imgCenter <= carouselRect.right
        );
      });

      // Display the correct title
      // Show user what post is in focus by adding a style class
      if (focusedPost) {
        const focusedIndex = focusedPost.dataset.index;
        blogTitle.innerText =
          latestPosts[focusedIndex].title || "Title unknown";
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

    carousel.addEventListener("scroll", () => {
      setTimeout(initialFocusedPost, 100);
    });

    setSpecificColors();
    initialFocusedPost();
    carouselClickEvents();
  } catch (error) {
    alertMessage("Woops! Couldn't load carousel right now 😬");
    throw new Error(`Error occurred loading carousel: ${error.message}`);
  }
}
