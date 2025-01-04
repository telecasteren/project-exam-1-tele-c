import {
  NO_IMAGE_FOUND_IMG,
  ALT_NOT_FOUND,
} from "/js/utils/general/constants.js";

export const handlePost = (post) => {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0];
  const tags = post._embedded?.["wp:term"]?.[1];

  const postCategories = categories
    ? categories.map((cat) => cat.name).join(", ")
    : "Uncategorised";

  const postTags = tags ? tags.map((tag) => tag.name).join(", ") : "No Tags";

  // Returning everything we need in relation to the posts
  return {
    id: post.id,
    title: post.title.rendered,
    textContent: post.content.rendered,
    publishDate: new Date(post.date),
    postCategory: postCategories,
    postTag: postTags,
    imgSrc: featuredMedia?.source_url || NO_IMAGE_FOUND_IMG,
    imgAlt: featuredMedia?.alt_text || ALT_NOT_FOUND,
  };
};
