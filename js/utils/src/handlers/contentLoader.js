// BLOG IMPORTS
import { createPostHtml } from "/js/app/ui/blogs/specificPost/createPostHtml.js";
import { commentsFormHtml } from "/js/app/ui/blogs/comments/commentsFormHtml.js";
import { displayComments } from "/js/app/ui/blogs/comments/displayComments.js";
import { initialiseBlogList } from "/js/app/ui/blogs/blogListHtml.js";
import { setFilterOptions } from "/js/app/ui/components/filters/filterHtml/options.js";
import { onSortChange } from "/js/app/ui/components/filters/onSortChange.js";
import { onFilterChange } from "/js/app/ui/components/filters/onFilterChange.js";
import {
  postContainer,
  blogListContainer,
} from "/js/utils/general/constants.js";

export async function loadBlogListAndFilters() {
  if (blogListContainer) {
    await initialiseBlogList();
    setFilterOptions(onSortChange, onFilterChange);
  }
}

export async function loadPostAndComments(postId) {
  if (postContainer) {
    await createPostHtml();
    commentsFormHtml();
    displayComments(postId);
  }
}
