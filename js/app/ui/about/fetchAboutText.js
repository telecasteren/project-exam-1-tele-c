import { ErrorWrapper } from "/js/utils/messages/errorWrapper.js";

export async function fetchAboutText() {
  const textContent = document.querySelector(".textContent");

  const existingError = textContent.querySelector(".errorWrapper");
  if (existingError) existingError.remove();

  try {
    const response = await fetch("/js/app/ui/about/aboutText.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const textParagraph = document.createElement("p");
    textParagraph.classList.add("aboutText");
    textParagraph.innerText = data.aboutText;

    textContent.appendChild(textParagraph);
  } catch (error) {
    console.error("Error when loading JSON:", error);

    const errorMessage = ErrorWrapper(
      `An error occurred when fetching text content.`
    );
    textContent.appendChild(errorMessage);
  }
}
