// UTILS & COMPONENTS
import { colorModeIcon } from "/js/app/ui/components/colorMode/colorModeIcon.js";
import { setSpecificColors } from "/js/app/ui/components/colorMode/setSpecificColors.js";
import { setUpColorModes } from "/js/app/ui/components/colorMode/colorModeEvents.js";
import { navBar } from "/js/app/ui/components/navigation/navbar.js";
import {
  footerOnScroll,
  footerHtml,
} from "/js/app/ui/components/footer/footer.js";
import { setPageTitles } from "/js/utils/helpers/setPageTitles.js";
import { setMetaDescriptions } from "/js/utils/helpers/setMetaDescriptions.js";

// LANDING IMPORTS
import { carouselHtml } from "/js/app/ui/carousel/carouselHtml.js";

// BLOG IMPORTS
import { createPostHtml } from "/js/app/ui/blogs/createPostHtml.js";
import { createCommentsHtml } from "/js/app/ui/blogs/comments/createCommentsHtml.js";
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
let scrollTimeout;
document.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    footerOnScroll();
  }, 100);
});
footerHtml();

// RENDER REST OF CONTENT
document.addEventListener("DOMContentLoaded", function () {
  setPageTitles();
  setMetaDescriptions();
  navBar();
  colorModeIcon();
  setUpColorModes();
  setSpecificColors();

  async function loadPostAndComments() {
    if (postContainer) {
      await createPostHtml();
      createCommentsHtml();
    }
  }
  loadPostAndComments();

  async function loadBlogListAndFilters() {
    if (blogListContainer) {
      await initialiseBlogList();
      setFilterOptions(onSortChange, onFilterChange);
    }
  }
  loadBlogListAndFilters();

  if (homeContainer) {
    carouselHtml();
  }

  if (aboutContainer) {
    aboutHtml();
  }

  if (contactContainer) {
    contactForm();
  }
});
