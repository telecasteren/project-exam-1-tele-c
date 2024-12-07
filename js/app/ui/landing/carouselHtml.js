// import { loader, homeContainer } from "/js/utils/general/constants.js";
// import { carouselClickEvents } from "/js/app/eventListeners/carouselClickEvents.js";

// export async function carouselHtml() {
//   try {

//     const posts = await fetchPostsWithInfo();

//     loader.style.display = "none";

//     const container = document.createElement("div");
//     container.classList.add("carousel-container");
//     container.setAttribute("role", "region");
//     container.setAttribute("aria-labelledby", "carouselTitle");

//     const carousel = document.createElement("div");
//     carousel.classList.add("container", "carousel");

//     const carouselIMG = document.createElement("img");
//     carouselIMG.classList.add("carouselIMG");
//     carouselIMG.src = "/IMAGES/code-snippet.png"; // set dynamically with api
//     carouselIMG.alt = ""; // set dynamically with api

//     // const slideShowDiv = document.createElement("div");
//     // slideShowDiv.classList.add("slideShowDiv");

//     // const slideLeft = document.createElement("div");
//     // slideLeft.classList.add("slideLeft");
//     // slideLeft.setAttribute("role", "button");
//     // slideLeft.setAttribute("aria-label", "Previous slide");
//     // slideLeft.innerText = "<";

//     // const slideRight = document.createElement("div");
//     // slideRight.classList.add("slideRight");
//     // slideRight.setAttribute("role", "button");
//     // slideRight.setAttribute("aria-label", "Next slide");
//     // slideRight.innerText = ">";

//     const blogTitle = document.createElement("h1");
//     blogTitle.classList.add("carouselTitle");
//     blogTitle.id = "carouselTitle";
//     blogTitle.innerText = `const TECHnically =
//   "i'm a developer now"`; // set dynamically with api

//     // Initial hierarchy
//     // slideShowDiv.appendChild(slideLeft);
//     // slideShowDiv.appendChild(slideRight);
//     // carousel.appendChild(slideShowDiv);
//     carousel.appendChild(carouselIMG);
//     container.appendChild(carousel);
//     container.appendChild(blogTitle);
//     homeContainer.appendChild(container);

//     // If screen size <= 1100px, reorder container hierarchy
//     function smallerScreens(changeEvent) {
//       container.setAttribute("aria-live", "polite");

//       const smallScreens = changeEvent
//         ? changeEvent.matches
//         : window.matchMedia("(max-width: 1100px)").matches;

//       container.innerHTML = "";

//       if (smallScreens) {
//         container.appendChild(blogTitle);
//         container.appendChild(carousel);
//       } else {
//         container.appendChild(carousel);
//         container.appendChild(blogTitle);
//       }
//     }

//     const screenSizeChanges = window.matchMedia("(max-width: 1100px)");
//     screenSizeChanges.addEventListener("change", smallerScreens);

//     smallerScreens();
//     carouselClickEvents();
//   } catch (error) {
//     alertMessage("Woops! Post carousel out of function right now");
//     throw Error;
//   }
// }

// Carousel with scroll
import { fetchPostsWithInfo } from "/js/utils/src/api/fetchPosts.js";
import {
  loader,
  homeContainer,
  NO_IMAGE_FOUND_IMG,
} from "/js/utils/general/constants.js";
import { carouselClickEvents } from "/js/app/eventListeners/carouselClickEvents.js";
import { alertMessage } from "/js/app/ui/components/messages/alertMessage.js";
import { hoverFocusHandler } from "/js/app/eventListeners/hoverFocusHandler.js";
import { scrollHandler } from "/js/app/ui/landing/scrollHandler.js";

export async function carouselHtml() {
  try {
    const posts = await fetchPostsWithInfo();

    loader.style.display = "none";

    const container = document.createElement("div");
    container.classList.add("carousel-container");
    container.setAttribute("role", "region");
    container.setAttribute("aria-labelledby", "carouselTitle");

    const carousel = document.createElement("div");
    carousel.classList.add("container", "carousel");

    // Display only the 6 latest posts
    const latestPosts = posts
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 6);
    const allItems = [...latestPosts, ...latestPosts, ...latestPosts];

    const blogTitle = document.createElement("h1");
    blogTitle.classList.add("carouselTitle");
    blogTitle.id = "carouselTitle";
    blogTitle.innerText = posts[0].title || "Unknown title";

    allItems.forEach((post, index) => {
      const carouselIMG = document.createElement("img");
      carouselIMG.className = "carouselIMG";
      carouselIMG.src = post.imgSrc || NO_IMAGE_FOUND_IMG;
      carouselIMG.alt = post.imgAlt || `Image ${index + 1}`;
      carouselIMG.loading = "lazy";
      carouselIMG.dataset.index = index;
      carouselIMG.dataset.postId = post.id;

      carousel.appendChild(carouselIMG);
    });

    container.appendChild(blogTitle);
    container.appendChild(carousel);
    homeContainer.appendChild(container);

    // Handling hover and focus events here
    hoverFocusHandler();
    // Handling scroll events here
    scrollHandler();

    // // Track the focused post
    function updateTitleInFocus() {
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
      // Visually show user what post is in focus by adding a style class
      if (focusedPost) {
        const focusedIndex = focusedPost.dataset.index;
        blogTitle.innerText = allItems[focusedIndex].title || "Title unknown";
        blogTitle.dataset.postId = allItems[focusedIndex].id;
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
      setTimeout(updateTitleInFocus, 100);
    });

    // If screen size <= 1100px, reorder container hierarchy
    function smallerScreens(changeEvent) {
      const smallScreens = changeEvent
        ? changeEvent.matches
        : window.matchMedia("(max-width: 1100px)").matches;

      container.innerHTML = "";

      if (smallScreens) {
        container.appendChild(blogTitle);
        container.appendChild(carousel);
      } else {
        container.appendChild(carousel);
        container.appendChild(blogTitle);
      }
    }

    const screenSizeChanges = window.matchMedia("(max-width: 1100px)");
    screenSizeChanges.addEventListener("change", smallerScreens);

    smallerScreens();
    updateTitleInFocus();
    carouselClickEvents();
  } catch (error) {
    alertMessage("Woops! Couldn't load carousel right now 😬");
    throw Error;
  }
}
