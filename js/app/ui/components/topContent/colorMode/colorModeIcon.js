import { alertMessage } from "/js/utils/messages/alertMessage.js";
import { setSpecificColors } from "/js/app/ui/components/topContent/colorMode/setSpecificColors.js";
import {
  setUpColorModes,
  toggleColorModes,
} from "/js/app/ui/components/topContent/colorMode/colorModeEvents.js";

export function colorModeIcon() {
  const iconContainer = document.querySelector(".iconContainer");

  const lightBulbDiv = document.createElement("div");
  lightBulbDiv.classList.add("lightBulb");
  lightBulbDiv.setAttribute("tabindex", "0");

  if (iconContainer) {
    iconContainer.appendChild(lightBulbDiv);
  } else {
    alertMessage("Color mode toggle is unavailable. :'(", "warning");
  }

  setUpColorModes();
  swapIcon(lightBulbDiv);
}

function swapIcon(lightBulbDiv) {
  const currentMode = window.localStorage.getItem("colorMode");

  lightBulbDiv.innerHTML = "";

  const newIconElement = document.createElement("i");
  newIconElement.classList.add("specificIconElement");
  newIconElement.style.display = "block";

  switch (currentMode) {
    case "rebel":
      newIconElement.style.backgroundImage =
        "url(/resources/IMAGES/rebellion-small.png)";
      newIconElement.style.color = "var(--tertiary-color)";
      break;

    case "sith":
      newIconElement.style.backgroundImage =
        "url(/resources/IMAGES/Sith-small.png)";
      newIconElement.style.color = "var(--tertiary-color)";
      break;

    default:
      const lightBulbIcon = document.createElement("i");
      lightBulbIcon.classList.add("fa-regular", "fa-lightbulb", "fa-2xl");
      lightBulbDiv.appendChild(lightBulbIcon);

      // Attach the event listeners to the default icon
      lightBulbIcon.addEventListener("click", () => {
        toggleColorModes();
        setSpecificColors();
        swapIcon(lightBulbDiv);
      });

      if (!lightBulbDiv) {
        alertMessage("Couldn't display color mode icon. :'(", "info");
      }
      return;
  }

  // Attach the event listeners to the specified icons
  newIconElement.addEventListener("click", () => {
    toggleColorModes();
    setSpecificColors();
    swapIcon(lightBulbDiv);
  });

  lightBulbDiv.appendChild(newIconElement);
}
