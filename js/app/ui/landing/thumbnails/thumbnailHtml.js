import { thumbnailClicks } from "/js/app/eventListeners/thumbnailEvents.js";

export function thumbnailHtml() {
  const thumbnailContainer = document.querySelector(".thumb-container");

  const container = document.createElement("div");
  container.classList.add("container", "thumbContent");

  const expandPosts = document.createElement("h3");
  expandPosts.classList.add("expandPosts");
  expandPosts.innerText = "View more >";

  const num = 10;

  for (let i = 0; i < num; i++) {
    const thumbnails = document.createElement("div");
    thumbnails.classList.add("thumbnails");

    const titleBlob = document.createElement("p");
    titleBlob.classList.add("titleBlob");
    titleBlob.innerText = `Title
      Blob text about the blog goes here.`; // Set dynamically with API

    // const thumbImg = document.createElement("img");
    // thumbImg.classList.add("thumbImg");
    // thumbImg.src = ""; // Set dynamically with API
    // thumbImg.alt = ""; // Set dynamically with API

    // titleBlob.appendChild(thumbImg);
    thumbnails.appendChild(titleBlob);
    // thumbnails.appendChild(thumbImg);
    container.appendChild(thumbnails);
    thumbnailContainer.appendChild(container);
  }

  container.appendChild(expandPosts);

  thumbnailClicks();
}
