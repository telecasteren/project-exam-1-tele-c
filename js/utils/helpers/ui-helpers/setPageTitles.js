export function setPageTitles() {
  let pageTitle = "Home | Blog";
  const postTitle = "POST TITLE GOES HERE"; // Set dynamically with API

  if (window.location.pathname.includes("/about/")) {
    pageTitle = "About | Blog";
  } else if (window.location.pathname.includes("/stories/")) {
    pageTitle = "Stories | Blog";
  } else if (window.location.pathname.includes("/contact/")) {
    pageTitle = "Contact | Blog";
  } else if (window.location.pathname.includes("/post/")) {
    pageTitle = `${postTitle} | Blog`;
  }

  document.title = pageTitle;
}
