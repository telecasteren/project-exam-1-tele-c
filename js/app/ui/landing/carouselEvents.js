// export function slideShowEvents() {
//   const slideBackward = document.querySelector(".slideLeft");
//   const slideForward = document.querySelector(".slideRight");

//   slideForward.addEventListener("click", () => {});

//   slideBackward.addEventListener("click", () => {});
// }

// slideLeft.setAttribute("tabindex", "0");
// slideRight.setAttribute("tabindex", "0");

// slideLeft.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" || e.key === " ") {
//     // Move to previous slide
//   }
// });
// slideRight.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" || e.key === " ") {
//     // Move to next slide
//   }
// });

export function carouselEvents() {
  const scrollAmount = 300;

  // const slideShowDiv = document.createElement("div");
  // slideShowDiv.classList.add("slideShowDiv");

  // const slideLeft = document.createElement("div");
  // slideLeft.classList.add("slideLeft");
  // slideLeft.setAttribute("role", "button");
  // slideLeft.setAttribute("aria-label", "Previous slide");
  // slideLeft.innerText = "<";

  // const slideRight = document.createElement("div");
  // slideRight.classList.add("slideRight");
  // slideRight.setAttribute("role", "button");
  // slideRight.setAttribute("aria-label", "Next slide");
  // slideRight.innerText = ">";

  // Initial hierarchy
  // slideShowDiv.appendChild(slideLeft);
  // slideShowDiv.appendChild(slideRight);
  // carousel.appendChild(slideShowDiv);

  // Create left button
  const leftBtn = document.createElement("button");
  leftBtn.className = "carousel-btn left-btn";
  leftBtn.innerHTML = "&lt;";
  leftBtn.setAttribute("aria-label", "Scroll Left");

  // Create right button
  const rightBtn = document.createElement("button");
  rightBtn.className = "carousel-btn right-btn";
  rightBtn.innerHTML = "&gt;";
  rightBtn.setAttribute("aria-label", "Scroll Right");

  // Event listeners for buttons
  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}
