export function displayFormErrorMessage(field, message) {
  let isExistingError = field.nextElementSibling;
  if (isExistingError && isExistingError.classList.contains("formError")) {
    isExistingError.innerText = message;
  } else {
    const errorDiv = document.createElement("div");
    errorDiv.className = "formError";
    errorDiv.innerText = message;

    // Insert the error message after each input field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  }
}

export function clearFormErrorMessage(field) {
  const existingError = field.nextElementSibling;
  if (existingError && existingError.classList.contains("formError")) {
    existingError.remove();
  }
}
