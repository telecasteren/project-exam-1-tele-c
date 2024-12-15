import { mainSection } from "/js/utils/general/constants.js";

// No result in search for posts:
export function noResultMessage() {
  if (mainSection) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("no-results");
    messageContainer.innerText = "No posts match search input";

    mainSection.appendChild(messageContainer);
  }
}
