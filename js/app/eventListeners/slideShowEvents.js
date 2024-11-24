export function slideShowEvents() {
  const slideBack = document.querySelector(".slideLeft");
  const slideForward = document.querySelector(".slideRight");
  // Add slide show logic here
}

slideLeft.setAttribute("tabindex", "0");
slideRight.setAttribute("tabindex", "0");

slideLeft.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    // Move to previous slide
  }
});
slideRight.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    // Move to next slide
  }
});
