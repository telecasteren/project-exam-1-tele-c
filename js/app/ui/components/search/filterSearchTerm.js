// MUST BE ADJUSTED TO FIT PROJECT

import { levenshtein } from "/js/utils/general/tool-scripts/levenshtein.js";
import { SEARCH_KEY, container } from "/js/utils/general/constants.js";
import { noResultMessage } from "/js/utils/auth/messages.js";
import { renderProduct } from "/js/app/products/productListHtml.js";

export async function filterSearchTerm(posts) {
  container.innerHTML = "";

  try {
    const searchTerm = localStorage.getItem(SEARCH_KEY) || ""; // Validate search input field

    const filteredPosts = posts.filter((post) =>
      approximateMatch(searchTerm, post.name)
    );

    if (filteredPosts.length) {
      filteredPosts.forEach((post) => renderProduct(post));
    } else {
      noResultMessage();
    }
  } catch (error) {
    container.innerHTML = `<div class="error">An error occurred when searching products..</div>`;
    throw error;
  }
}

function sortSearchString(string) {
  return string.toLowerCase().split("").sort().join("");
}

function approximateMatch(input, title, threshold = 2) {
  if (title.toLowerCase().includes(input.toLowerCase())) {
    return true;
  }

  const sortedInput = sortSearchString(input);
  const sortedTitle = sortSearchString(title);

  if (sortedInput === sortedTitle) {
    return true;
  }

  const distance = levenshtein(input.toLowerCase(), title.toLowerCase());
  return distance <= threshold;
}
