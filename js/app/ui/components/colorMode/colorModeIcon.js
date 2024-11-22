import { topContent } from "/js/utils/general/constants.js";

export function colorModeIcon() {
  const lightBulbDiv = document.createElement("div");
  lightBulbDiv.classList.add("lightBulb");
  lightBulbDiv.setAttribute("tabindex", "0");

  const lightBulbIcon = document.createElement("i");
  lightBulbIcon.classList.add("fa-regular", "fa-lightbulb", "fa-2xl");
  lightBulbIcon.style.color = "#02cd88";

  lightBulbDiv.prepend(lightBulbIcon);
  topContent.prepend(lightBulbDiv);
}
