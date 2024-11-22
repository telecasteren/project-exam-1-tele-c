export async function createPostHtml() {
  const blogs = await fetchBlogs();
  
  blogs.forEach(blog) {
  const blogTextContent  = blog.post;
  
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("hidden", "contentContainer");
  
  const contentText = document.createElement("p");
  contentText.classList.add("contentText");
  contentText.innerHTML = blogTextContent;

  const blogImg = document.createElement("img");
  blogImg.classList.add("blogImg");
  blogImg.src = blog.img;
  blogImg.alt = blog.alt;
  
  
  contentContainer.appendChild(blogImg);
  contentContainer.appendChild(contentText);
  blogContainer.appendChild(contentContainer);
  }
  }
  createPostHtml();