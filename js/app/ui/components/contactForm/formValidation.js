import {
  displayFormErrorMessage,
  clearFormErrorMessage,
} from "/js/utils/messages/formErrors.js";

export function emailValidation(emailInput) {
  emailInput.addEventListener("input", () => {
    // A regex pattern to check if input value is a valid email address
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(emailInput.value)) {
      emailInput.setCustomValidity(
        `Please enter a valid email address. Must contain "@" and "."`
      );
      displayFormErrorMessage(
        emailInput,
        "Please enter a valid email address."
      );
    } else {
      emailInput.setCustomValidity("");
      clearFormErrorMessage(emailInput);
    }
  });
}

// Reusable function to check that the actual MinLength meets the requirements
export function MinLengthValidation(input, minLength, message) {
  input.addEventListener("input", () => {
    if (input.value.length < minLength) {
      input.setCustomValidity(message);
      displayFormErrorMessage(input, message);
    } else {
      input.setCustomValidity("");
      clearFormErrorMessage(input);
    }
  });
}
