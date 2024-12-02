export function setPageTitles() {
  let pageTitle = "Home | unwired";
  const postTitle = "POST TITLE GOES HERE"; // Set dynamically with API

  if (window.location.pathname.includes("/about/")) {
    pageTitle = "About | unwired";
  } else if (window.location.pathname.includes("/stories/")) {
    pageTitle = "Stories | unwired";
  } else if (window.location.pathname.includes("/contact/")) {
    pageTitle = "Contact | unwired";
  } else if (window.location.pathname.includes("/post/")) {
    pageTitle = `${postTitle} | unwired`;
  }

  document.title = pageTitle;
}
