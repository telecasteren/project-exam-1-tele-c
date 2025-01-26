// TOP LAYOUT & COLORMODE
import { topLayout } from "/js/app/ui/components/topContent/topLayout.js";
import { colorModeIcon } from "/js/app/ui/components/topContent/colorMode/colorModeIcon.js";
import { setSpecificColors } from "/js/app/ui/components/topContent/colorMode/setSpecificColors.js";
import { setUpColorModes } from "/js/app/ui/components/topContent/colorMode/colorModeEvents.js";
import { navBar } from "/js/app/ui/components/topContent/navigation/navbar.js";
import { setLogo } from "/js/app/ui/components/topContent/logo/setLogo.js";
import {
  footerOnScroll,
  footerHtml,
} from "/js/app/ui/components/footer/footer.js";

// UTILS
import { setPageTitles } from "/js/utils/helpers/setPageTitles.js";
import { setMetaDescriptions } from "/js/utils/helpers/setMetaDescriptions.js";
import {
  loadBlogListAndFilters,
  loadPostAndComments,
} from "/js/utils/src/handlers/contentLoader.js";

// LANDING
import { welcomeSection } from "/js/app/ui/landing/welcomeSection.js";
import { carouselHtml } from "/js/app/ui/carousel/carouselHtml.js";

// ABOUT
import { aboutHtml } from "/js/app/ui/about/aboutHtml.js";

// CONTACT
import { contactForm } from "/js/app/ui/components/contactForm/contactForm.js";
import { createContactFormTitle } from "/js/app/ui/components/contactForm/contactTitle.js";

// CONSTANTS
import {
  homeContainer,
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
  topLayout();
  colorModeIcon();
  setLogo();
  navBar();
  setUpColorModes();
  setSpecificColors();

  if (homeContainer) {
    welcomeSection();
    carouselHtml();
  }

  if (aboutContainer) {
    aboutHtml();
  }

  if (contactContainer) {
    createContactFormTitle();
    contactForm();
  }

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");
  if (postId) {
    loadPostAndComments(postId);
  }
  loadBlogListAndFilters();
});
