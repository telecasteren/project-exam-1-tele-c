import { colorModeIcon } from "/js/app/ui/components/colorMode/colorModeIcon.js";
import { navBar } from "/js/app/ui/components/navigation/navbar.js";
import { footerOnScroll } from "/js/app/ui/components/footer/footer.js";

// LANDING CONTENT IMPORTS
import { homeContainer } from "/js/utils/general/constants.js";
import { carouselHtml } from "/js/app/ui/landing/carouselHtml.js";

// RENDER FOOTER
document.addEventListener("scroll", () => {
  footerOnScroll();
});

// RENDER REST OF CONTENT
document.addEventListener("DOMContentLoaded", function () {
  navBar();
  colorModeIcon();

  if (homeContainer) {
    carouselHtml();
  }
});
