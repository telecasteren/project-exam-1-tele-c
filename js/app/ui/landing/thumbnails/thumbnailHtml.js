export function thumbnailHtml() {
  const thumbnailContainer = document.querySelector(".thumb-container");

  const container = document.createElement("div");
  container.classList.add("container", "thumbContent");

  thumbnailContainer.appendChild(container);
}
