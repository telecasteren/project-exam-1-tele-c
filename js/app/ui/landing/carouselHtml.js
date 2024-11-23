import { loader, homeContainer } from "/js/utils/general/constants.js";

export function carouselHtml() {
  loader.style.display = "none";

  const container = document.createElement("div");
  container.classList.add("carousel-container");

  const carousel = document.createElement("div");
  carousel.classList.add("container", "carousel");

  const carouselIMG = document.createElement("img");
  carouselIMG.classList.add("carouselIMG");
  carouselIMG.src = "/IMAGES/code-snippet.png"; // set dynamically with api
  carouselIMG.alt = ""; // set dynamically with api

  const slideShowDiv = document.createElement("div");
  slideShowDiv.classList.add("slideShowDiv");

  const slideLeft = document.createElement("div");
  slideLeft.classList.add("slideLeft");
  slideLeft.innerText = "<";

  const slideRight = document.createElement("div");
  slideRight.classList.add("slideRight");
  slideRight.innerText = ">";

  const blogTitle = document.createElement("h1");
  blogTitle.classList.add("carouselTitle");
  blogTitle.innerText = `const TECHnically =
  "i'm a developer now"`; // set dynamically with api

  slideShowDiv.appendChild(slideLeft);
  slideShowDiv.appendChild(slideRight);
  carousel.appendChild(slideShowDiv);
  carousel.appendChild(carouselIMG);

  // Initial hierarchy
  container.appendChild(carousel);
  container.appendChild(blogTitle);

  homeContainer.appendChild(container);

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
}
