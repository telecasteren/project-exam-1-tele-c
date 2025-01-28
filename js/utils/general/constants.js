// Color modes
export const colorModes = [
  "dark",
  "light",
  "lightBlue",
  "rb",
  "br",
  "rebel",
  "sith",
];

// General
export const loader = document.querySelector(".loader");

// Filters
export const selectArrow = (color) =>
  `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" fill="${encodeURIComponent(
    color
  )}" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>')`;

// Informative
export const contactAuthorLink = `<a href="/blog/contact/" target="_blank" style="color: blue; text-decoration: underline;">HERE</a>`;
export const NO_IMAGE_FOUND_IMG = "/IMAGES/no_image_found.jpg";
export const POST_NOT_FOUND = "No blog post found";
export const ALT_NOT_FOUND = "No alt text found";

// Containers
export const mainSection = document.querySelector(".main-section");
export const homeContainer = document.querySelector(".home-container");
export const aboutContainer = document.querySelector(".about-container");
export const postContainer = document.querySelector(".post-container");
export const blogListContainer = document.querySelector(".blogList-container");
export const thumbnailContainer = document.querySelector(".thumb-container");
export const contactContainer = document.querySelector(".contact-container");

// Meta descriptions
export const defaultPostDesc =
  "Read more about everyday programming and dev topics on Unwired's blog";
export const defaultDescFallback =
  "Welcome to Unwired, your source for low key writing and average insights";
export const defaultDescriptions = {
  "/about/": "Learn about the story behind Unwired and its creator.",
  "/writing/": "Explore Unwired's collection of non-selling stories.",
  "/contact/": "Get in touch with us at Unwired for inquiries or feedback.",
};
