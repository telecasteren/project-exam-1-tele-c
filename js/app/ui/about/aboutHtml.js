import { aboutContainer, loader } from "/js/utils/general/constants.js";
import { fetchAboutText } from "/js/app/ui/about/fetchAboutText.js";

export function aboutHtml() {
  loader.style.display = "none";

  const container = document.createElement("div");
  container.classList.add("container", "aboutContent");
  container.setAttribute("aria-labelledby", "aboutTitle");
  container.setAttribute("role", "region");

  const textContent = document.createElement("div");
  textContent.classList.add("textContent");

  const textTitle = document.createElement("h1");
  textTitle.classList.add("aboutTitle");
  textTitle.id = "aboutTitle";
  textTitle.innerText = `About`;

  const aboutImg = document.createElement("img");
  aboutImg.classList.add("aboutImg");
  aboutImg.src = "/resources/IMAGES/tele-bali-beach.jpeg";
  aboutImg.alt = "Image of the author Tele Caster Nilsen at a beach in Bali.";

  container.appendChild(aboutImg);
  container.appendChild(textContent);
  aboutContainer.appendChild(textTitle);
  aboutContainer.appendChild(container);

  if (textContent) {
    fetchAboutText();
  }
}
