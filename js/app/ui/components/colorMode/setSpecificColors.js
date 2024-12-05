export function setSpecificColors() {
  const currentMode = window.localStorage.getItem("colorMode");
  const submitBtn = document.querySelector("#submitBtn");
  const navLinks = document.querySelectorAll(".navLinks");

  if (submitBtn) {
    // Set or reset color on submit button based on colorMode
    if (currentMode === "rb" || currentMode === "br") {
      submitBtn.style.backgroundColor = "var(--tertiary-color)";
    } else {
      submitBtn.style.backgroundColor = "";
    }
  }

  if (!navLinks.length) {
    console.warn("No navLinks found.");
  } else {
    // Set or reset color on nav buttons based on colorMode
    navLinks.forEach((link) => {
      if (currentMode === "rb" || currentMode === "br") {
        link.style.backgroundColor = "var(--tertiary-color)";
      } else {
        link.style.backgroundColor = "";
      }
    });
  }
}
