import { wooComApiKey, wooComApiSecret } from "/js/utils/auth/keys/wooKeys.js";
import {
  NO_IMAGE_FOUND_IMG,
  post_NOT_FOUND,
  wrapper,
} from "/js/utils/general/constants.js";

const baseUrl = "https://BLOGNAME.no/wp-json/wc/v3/posts";

export async function fetchPosts(id) {
  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;

    const response = await fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(wooComApiKey + ":" + wooComApiSecret),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const info = await response.json();
    return info;
  } catch (error) {
    if (wrapper) {
      wrapper.innerHTML = `<div class="error">An error occurred when fetching posts..</div>`;
    }

    throw error;
  }
}

// Helper to get post data parameters
export function extractPostData(post) {
  return {
    id: post.id,
    title: post.name,
    description: post.description,
    shortDescription: post.short_description,
    price: post.price,
    salePrice: post.sale_price,
    onSale: post.on_sale,
    stockStatus: post.stock_status,
    stockQuantity: post.stock_quantity,
    lowStockAmount: post.low_stock_amount,
    genre: post.categories.map((cat) => cat.name).join(", "),
    imgSrc: post.images.length > 0 ? post.images[0].src : NO_IMAGE_FOUND_IMG,
    imgAlt: post.images.length > 0 ? post.images[0].alt : post_NOT_FOUND,
  };
}
