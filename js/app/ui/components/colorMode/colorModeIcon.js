import { topContent } from "/js/utils/general/constants.js";
import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { setSpecificColors } from "/js/app/ui/components/colorMode/setSpecificColors.js";
import {
  setUpColorModes,
  toggleColorModes,
} from "/js/app/ui/components/colorMode/colorModeEvents.js";

export function colorModeIcon() {
  const lightBulbDiv = document.createElement("div");
  lightBulbDiv.classList.add("lightBulb");
  lightBulbDiv.setAttribute("tabindex", "0");

  const lightBulbIcon = document.createElement("i");
  lightBulbIcon.classList.add("fa-regular", "fa-lightbulb", "fa-2xl");

  if (!lightBulbIcon) {
    alertMessage("Couldn't change colors right now :'(", "info");
  }

  lightBulbIcon.addEventListener("click", () => {
    toggleColorModes();
    setSpecificColors();
  });

  lightBulbDiv.prepend(lightBulbIcon);
  topContent.prepend(lightBulbDiv);

  setUpColorModes();
}
