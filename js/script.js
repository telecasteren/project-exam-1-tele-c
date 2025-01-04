import { colorModeIcon } from "/js/app/ui/components/colorMode/colorModeIcon.js";
import { setSpecificColors } from "/js/app/ui/components/colorMode/setSpecificColors.js";
import { setUpColorModes } from "/js/app/ui/components/colorMode/colorModeEvents.js";
import { navBar } from "/js/app/ui/components/navigation/navbar.js";
import { footerOnScroll } from "/js/app/ui/components/footer/footer.js";
import { setPageTitles } from "/js/utils/helpers/setPageTitles.js";

// LANDING IMPORTS
import { carouselHtml } from "/js/app/ui/carousel/carouselHtml.js";

// BLOG IMPORTS
import { createPostHtml } from "/js/app/ui/blogs/createPostHtml.js";
import { initialiseBlogList } from "/js/app/ui/blogs/blogListHtml.js";
import { setFilterOptions } from "/js/app/ui/components/filters/options.js";
import { onSortChange } from "/js/app/ui/components/filters/onSortChange.js";
import { onFilterChange } from "/js/app/ui/components/filters/onFilterChange.js";

// ABOUT IMPORTS
import { aboutHtml } from "/js/app/ui/about/aboutHtml.js";

// CONTACT IMPORTS
import { contactForm } from "/js/app/ui/components/contactForm/contactForm.js";

// CONSTANTS
import {
  homeContainer,
  postContainer,
  blogListContainer,
  aboutContainer,
  contactContainer,
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
  setUpColorModes();
  setSpecificColors();

  if (homeContainer) {
    carouselHtml();
  }

  if (blogListContainer) {
    initialiseBlogList();
    setTimeout(() => {
      setFilterOptions(onSortChange, onFilterChange);
    }, 200);
  }

  if (postContainer) {
    createPostHtml();
  }

  if (aboutContainer) {
    aboutHtml();
  }

  if (contactContainer) {
    contactForm();
  }
});
