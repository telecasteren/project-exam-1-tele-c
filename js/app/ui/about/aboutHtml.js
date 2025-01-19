import { aboutContainer, loader } from "/js/utils/general/constants.js";

export function aboutHtml() {
  loader.style.display = "none";

  const container = document.createElement("div");
  container.classList.add("container", "aboutContent");
  container.setAttribute("role", "region");

  const textContent = document.createElement("div");
  textContent.classList.add("textContent");

  const textTitle = document.createElement("h1");
  textTitle.classList.add("aboutTitle");
  textTitle.id = "aboutTitle";
  textTitle.innerText = `About`;

  const textParagraph = document.createElement("p");
  textParagraph.classList.add("aboutText");
  textParagraph.innerText = `This is the blog of Tele Caster Nilsen, created during the first year
  of his front end studies at Noroff School of Technology and Media.

  It is a collection of stories and experiences from his life and
  career, both on and off the screen.`;

  const aboutImg = document.createElement("img");
  aboutImg.classList.add("aboutImg");
  aboutImg.src = "/resources/IMAGES/T-bali-beach.jpeg";
  aboutImg.alt = "Image of the author Tele Caster Nilsen at a beach in Bali.";

  container.appendChild(aboutImg);
  textContent.appendChild(textTitle);
  textContent.appendChild(textParagraph);
  container.appendChild(textContent);
  aboutContainer.appendChild(container);
}
