import { loader, postContainer } from "/js/utils/general/constants.js";

// export async function createPostHtml() {
//   const blogs = await fetchBlogs();

//   blogs.forEach(blog) {
//   const blogTextContent  = blog.post;

//   const contentContainer = document.createElement("div");
//   contentContainer.classList.add("hidden", "contentContainer");

//   const contentText = document.createElement("p");
//   contentText.classList.add("contentText");
//   contentText.innerHTML = blogTextContent;

//   const blogImg = document.createElement("img");
//   blogImg.classList.add("blogImg");
//   blogImg.src = blog.img;
//   blogImg.alt = blog.alt;

//   contentContainer.appendChild(blogImg);
//   contentContainer.appendChild(contentText);
//   blogContainer.appendChild(contentContainer);
//   }
//   }
//   createPostHtml();

export function createPostHtml() {
  loader.style.display = "none";

  try {
    const container = document.createElement("div");
    container.classList.add("container", "postContent");
    container.setAttribute("role", "region");
    container.setAttribute("aria-labelledby", "contentTitle");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    const contentTitle = document.createElement("h1");
    contentTitle.classList.add("contentTitle");
    contentTitle.id = "contentTitle";
    contentTitle.innerText = `const TECHnically = “i'm a developer now”;`; // SET DYNAMICALLY WITH API

    const contentText = document.createElement("p");
    contentText.classList.add("contentText");
    contentText.innerText = `Oh, yeah, can you believe it?!

    If you would have asked me 4 years ago, I would NEVER have thought that I'd even be where I am now. I looked at programming as completely unattainable.
    
    People* told me that programmers have been doing it all their lives, and after a certain age one could just forget about making a career out of it. Even after I started study programming seriously, I experienced a stranger telling me “Why bother, you're never going to be a programmer. It's too late, you're not cut out for it”.
    
    Well would you look at me know! Grinding the gears with my keyboard and what not.
    
    Dear stranger, I hope you read this.
    Yours sincerely,
    Tele
    
    *non devs
    `; // SET DYNAMICALLY WITH API

    const postFooter = document.createElement("p");
    postFooter.classList.add("postFooter");
    postFooter.innerText = `Published: 14.10.2024`; // SET DYNAMICALLY WITH API ${publishDate}

    const blogImg = document.createElement("img");
    blogImg.classList.add("blogImg");
    blogImg.setAttribute("role", "img");
    blogImg.src = "/IMAGES/code-snippet.png"; // SET DYNAMICALLY WITH API
    blogImg.alt = "BLOG IMAGE ALT"; // SET DYNAMICALLY WITH API

    // Initial hierarchy
    textContainer.appendChild(contentTitle);
    textContainer.appendChild(contentText);
    textContainer.appendChild(postFooter);

    container.appendChild(textContainer);
    container.appendChild(blogImg);
    postContainer.appendChild(container);

    // If screen size <= 1100px, reorder container hierarchy
    function smallerScreens(changeEvent) {
      container.setAttribute("aria-live", "polite");

      const smallScreens = changeEvent
        ? changeEvent.matches
        : window.matchMedia("(max-width: 1100px)").matches;

      container.innerHTML = "";

      if (smallScreens) {
        container.appendChild(blogImg);
        container.appendChild(contentTitle);
        container.appendChild(textContainer);
      } else {
        textContainer.appendChild(contentTitle);
        textContainer.appendChild(contentText);
        textContainer.appendChild(postFooter);
        container.appendChild(textContainer);
        container.appendChild(blogImg);
      }
    }

    const screenSizeChanges = window.matchMedia("(max-width: 1100px)");
    screenSizeChanges.addEventListener("change", smallerScreens);

    smallerScreens();
  } catch (error) {
    console.log("Error occurred fetching post", error);
    // Insert error handling here
  }
}
