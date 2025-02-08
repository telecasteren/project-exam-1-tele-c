import { setSpecificColors } from "/js/app/ui/components/topContent/colorMode/setSpecificColors.js";
import { colorModes } from "/js/utils/general/constants.js";

export function setUpColorModes() {
  const systemDefault = window.matchMedia("prefers-color-scheme: dark").matches
    ? "dark"
    : "light";
  const storedColorMode = window.localStorage.getItem("colorMode");

  const initialColorMode = storedColorMode || systemDefault;

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(initialColorMode);

  if (!storedColorMode) {
    window.localStorage.setItem("colorMode", initialColorMode);
  }
}

// We cycle through all colorModes here
export function toggleColorModes() {
  const currentColor = colorModes.find((mode) =>
    document.body.classList.contains(mode)
  );
  const currentIndex = colorModes.indexOf(currentColor);
  const nextIndex = (currentIndex + 1) % colorModes.length;
  const nextColor = colorModes[nextIndex];

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(nextColor);

  window.localStorage.setItem("colorMode", nextColor);

  setSpecificColors();
}
