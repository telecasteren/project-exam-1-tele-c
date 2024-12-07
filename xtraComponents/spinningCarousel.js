// PERFECT WITH INFINITE SPIN IN CSS
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

//     // Display only 4 posts
//     const items = posts.slice(0, 4);
//     const allItems = [...items, ...items, ...items]; // Duplicate for infinite loop effect

//     const blogTitle = document.createElement("h1");
//     blogTitle.classList.add("carouselTitle");
//     blogTitle.id = "carouselTitle";
//     blogTitle.innerText = posts[0].title || "Unknown title";

//     allItems.forEach((post, index) => {
//       const carouselIMG = document.createElement("img");
//       carouselIMG.className = "carouselIMG";
//       carouselIMG.src = post.imgSrc || NO_IMAGE_FOUND_IMG;
//       carouselIMG.alt = post.imgAlt || `Image ${index + 1}`;
//       carouselIMG.loading = "lazy";
//       carouselIMG.dataset.index = index;

//       carousel.appendChild(carouselIMG);
//     });

//     container.appendChild(blogTitle);
//     container.appendChild(carousel);
//     homeContainer.appendChild(container);

//     // Track the focused post (optional if you want to update the title during scroll)
//     function updateTitleInFocus() {
//       const carouselImgs = Array.from(
//         carousel.querySelectorAll(".carouselIMG")
//       );
//       const carouselRect = carousel.getBoundingClientRect();

//       // Find the post in focus
//       const focusedPost = carouselImgs.find((img) => {
//         const imgRect = img.getBoundingClientRect();
//         const imgCenter = imgRect.left + imgRect.width / 2;
//         return (
//           imgCenter >= carouselRect.left && imgCenter <= carouselRect.right
//         );
//       });

//       if (focusedPost) {
//         const focusedIndex = focusedPost.dataset.index;
//         blogTitle.innerText = allItems[focusedIndex].title || "Title unknown";
//       }
//     }

//     carousel.addEventListener("scroll", () => {
//       setTimeout(updateTitleInFocus, 100);
//     });

//     // If screen size <= 1100px, reorder container hierarchy
//     function smallerScreens(changeEvent) {
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
//     updateTitleInFocus();
//   } catch (error) {
//     alertMessage("Woops! Couldn't load carousel right now 😬");
//     throw Error;
//   }
// }
