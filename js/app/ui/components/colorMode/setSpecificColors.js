export function setSpecificColors() {
  const currentMode = window.localStorage.getItem("colorMode");

  // Elements getting specific colors
  const submitBtn = document.querySelector("#submitBtn");
  const navLinks = document.querySelectorAll(".navLinks");
  const carouselTitle = document.querySelector(".carouselTitle");
  const filterOptions = document.querySelectorAll(".options");

  if (carouselTitle) {
    switch (currentMode) {
      case "br":
        carouselTitle.style.color = "var(--tertiary-color)";
        carouselTitle.style.backgroundColor = "";
        break;

      case "light":
        carouselTitle.style.color = "";
        carouselTitle.style.backgroundColor = "var(--primary-color)";
        break;

      default:
        carouselTitle.style.color = "";
        carouselTitle.style.backgroundColor = "";
        break;
    }
  }

  if (!navLinks.length) {
    console.warn("No navLinks found.");
  } else {
    // Set or reset color on nav buttons based on colorMode
    const navLinkColors =
      currentMode === "rb" || currentMode === "br"
        ? "var(--tertiary-color)"
        : "";
    navLinks.forEach((link) => {
      link.style.backgroundColor = navLinkColors;
    });
  }

  if (submitBtn) {
    // Set or reset color on submit button based on colorMode
    submitBtn.style.backgroundColor =
      currentMode === "rb" || currentMode === "br"
        ? "var(--tertiary-color)"
        : "";
  }

  if (currentMode === "dark") {
    const filterOptionColor =
      currentMode === "dark" ? "var(--secondary-text)" : "";

    filterOptions.forEach((option) => {
      option.style.color = filterOptionColor;
    });
  }
}
