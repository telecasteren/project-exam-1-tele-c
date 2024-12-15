import { popUpModal } from "/js/app/ui/components/modal.js";

export function displayPostImageInModal() {
  const postImage = document.querySelector(".blogImg");

  if (postImage) {
    postImage.addEventListener("click", () => {
      const imageSrc = postImage.src;
      popUpModal(imageSrc);
    });
  }
}
