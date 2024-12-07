export function scrollHandler() {
  const carousel = document.querySelector(".carousel");
  const blogTitle = document.querySelector(".carouselTitle");
  const maxLeftScroll = carousel.scrollWidth - carousel.clientWidth;

  // Set scroll start position
  // Check where actual scrolling starts and ends
  carousel.scrollLeft = 0;
  let isScrolling = false;

  if (carousel.scrollLeft >= maxLeftScroll) {
    blogTitle.style.visibility = "hidden";
    carousel.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }

  if (carousel.scrollLeft === 0) {
    blogTitle.style.visibility = "visible";
  }

  if (!isScrolling) {
    carousel.style.transition = "none";
    carousel.classList.add("carousel-scrolling");
  }

  isScrolling = true;
  clearTimeout(carousel.scrollTimeout);

  carousel.scrollTimeout = setTimeout(() => {
    isScrolling = false;
    carousel.classList.remove("carousel-scrolling");
  }, 150);
}
