import { alertMessage } from "/js/utils/messages/alertMessage.js";

export function submitFormEvent() {
  const formElement = document.querySelector("form");
  const inputs = [
    { element: document.querySelector("#email"), minLength: 5 },
    { element: document.querySelector("#fname"), minLength: 5 },
    { element: document.querySelector("#subject"), minLength: 15 },
    { element: document.querySelector("#message"), minLength: 25 },
  ];

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formIsValid = inputs.every(
      (input) => input.element.value.trim().length >= input.minLength
    );

    if (formIsValid) {
      alertMessage("Thanks for your message! I'll get back to you soon :)");
    } else {
      alertMessage("Please fill out the form correctly and try again.");
    }
  });
}
