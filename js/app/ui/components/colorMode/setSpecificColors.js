export function setSpecificColors() {
  const currentMode = window.localStorage.getItem("colorMode");
  const submitBtn = document.querySelector("#submitBtn");
  const navLinks = document.querySelectorAll(".navLinks");

  if (submitBtn) {
    // Set color on submit button based on colorMode
    submitBtn.style.backgroundColor =
      currentMode === "rb" || currentMode === "br"
        ? "var(--tertiary-color)"
        : "";
  }

  if (!navLinks.length) {
    console.warn("No navLinks found.");
  } else {
    // Set color on nav buttons based on colorMode
    const specificColor =
      currentMode === "rb" || currentMode === "br"
        ? "var(--tertiary-color)"
        : "";

    navLinks.forEach((link) => {
      link.style.backgroundColor = specificColor;
    });
  }
}
