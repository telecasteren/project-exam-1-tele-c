import { colorModeIcon } from "/js/app/ui/components/colorMode/colorModeIcon.js";
import { navBar } from "/js/app/ui/components/navigation/navbar.js";
import { footerOnScroll } from "/js/app/ui/components/footer/footer.js";
import { setPageTitles } from "/js/utils/helpers/setPageTitles.js";

// LANDING IMPORTS
import { carouselHtml } from "/js/app/ui/landing/carouselHtml.js";
import { thumbnailHtml } from "/js/app/ui/landing/thumbnails/thumbnailHtml.js";

// BLOG IMPORTS
import { createPostHtml } from "/js/app/ui/blogs/createPostHtml.js";
import { blogListHtml } from "/js/app/ui/blogs/blogListHtml.js";

// ABOUT IMPORTS
import { aboutHtml } from "/js/app/ui/about/aboutHtml.js";

// Constants
import {
  homeContainer,
  postContainer,
  blogListContainer,
  aboutContainer,
} from "/js/utils/general/constants.js";

// RENDER FOOTER
document.addEventListener("scroll", () => {
  footerOnScroll();
});

// RENDER REST OF CONTENT
document.addEventListener("DOMContentLoaded", function () {
  setPageTitles();
  navBar();
  colorModeIcon();

  if (homeContainer) {
    carouselHtml();
    thumbnailHtml();
  }

  if (blogListContainer) {
    blogListHtml();
  }

  if (postContainer) {
    createPostHtml();
  }

  if (aboutContainer) {
    aboutHtml();
  }
});
