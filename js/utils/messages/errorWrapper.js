import { alertMessage } from "/js/utils/messages/alertMessage.js";

export function ErrorWrapper(message, options = {}) {
  if (typeof message !== "string") {
    console.error("Error message is not a string", message);

    if (options.showAlert !== false) {
      alertMessage("Something went wrong. Try again later.");
    }
    return null;
  }

  const { className = "errorWrapper", container = null } = options;

  const wrapper = document.createElement("div");
  wrapper.className = className;
  wrapper.textContent = message;
  wrapper.setAttribute("role", "alert");

  if (container && container.appendChild) {
    container.appendChild(wrapper);
  }

  return wrapper;
}
