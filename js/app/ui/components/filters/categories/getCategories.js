export async function getCategories() {
  const thumbnails = document.querySelectorAll(".thumbnails[data-category]");
  const options = new Set();

  thumbnails.forEach((thumbnail) => {
    const categoryList = thumbnail.dataset.category;
    if (categoryList) {
      categoryList.split(",").forEach((category) => {
        const splittedCategory = category.trim();
        if (splittedCategory) {
          options.add(splittedCategory);
        }
      });
    }
  });

  return Array.from(options);
}
