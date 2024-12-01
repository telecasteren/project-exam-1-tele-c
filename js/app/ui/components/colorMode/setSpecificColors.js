export function setSpecificColors() {
  const submitBtn = document.querySelector("#submitBtn");
  const currentMode = window.localStorage.getItem("colorMode");

  if (!submitBtn) {
    console.error("Couldn't set unique color, submit button not found");
    return;
  }

  // If color mode rb and br is true, set unique color on submit button
  if (currentMode === "rb" || currentMode === "br") {
    submitBtn.style.backgroundColor = "var(--tertiary-color)";
  } else {
    submitBtn.style.backgroundColor = "";
  }
}
