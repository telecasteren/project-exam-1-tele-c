export function setSpecificColors() {
  const submitBtn = document.querySelector("#submitBtn");
  const navLinks = document.querySelectorAll(".navLinks");
  const currentMode = window.localStorage.getItem("colorMode");

  if (!submitBtn) {
    console.error("Couldn't set unique color, submit button not found");
  } else {
    // Set submit button color based on if rb or br is colorMode
    if (currentMode === "rb" || currentMode === "br") {
      submitBtn.style.backgroundColor = "var(--tertiary-color)";
    } else {
      submitBtn.style.backgroundColor = "";
    }
  }
}
