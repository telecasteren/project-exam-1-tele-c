export function createThumbnails(post) {
  const thumbnails = document.createElement("div");
  thumbnails.classList.add("thumbnails");
  thumbnails.dataset.postId = post.id;
  thumbnails.dataset.publishDate = post.publishDate;
  thumbnails.dataset.category = post.postCategory;

  const titleBlob = document.createElement("p");
  titleBlob.classList.add("titleBlob");
  titleBlob.innerText = post.title;

  const thumbImg = document.createElement("img");
  thumbImg.classList.add("thumbImg");
  thumbImg.src = post.imgSrc;
  thumbImg.alt = post.imgAlt;

  thumbnails.appendChild(titleBlob);
  thumbnails.appendChild(thumbImg);

  return thumbnails;
}
