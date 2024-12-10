import { mainSection } from "/js/utils/general/constants.js";

export function popUpModal(imageSrc) {
  function createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "none";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeButton = document.createElement("span");
    closeButton.className = "close-modal";
    closeButton.innerHTML = "&times;";

    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    return modal;
  }

  function openModal() {
    let modal = document.querySelector(".modal");
    if (!modal) {
      modal = createModal();
      mainSection.appendChild(modal);
    }

    const modalContent = modal.querySelector(".modal-content");
    const closeButton = modal.querySelector(".close-modal");

    modalContent.innerHTML = "";
    modalContent.appendChild(closeButton);
    const postImage = document.createElement("img");
    postImage.className = "modalImg";
    postImage.src = imageSrc;
    postImage.alt = "Modal postImage";
    modalContent.appendChild(postImage);

    modal.style.display = "block";
    modal.focus();

    const closeModal = () => {
      modal.style.display = "none";
      closeButton.removeEventListener("click", onCloseClick);
      window.removeEventListener("click", onClickOutside);
    };

    // Close modal when clicking on the close button
    const onCloseClick = (event) => {
      if (event.target === closeButton) {
        closeModal();
      }
    };

    // Close modal when clicking outside of the modal
    const onClickOutside = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };

    closeButton.addEventListener("click", onCloseClick);
    window.addEventListener("click", onClickOutside);
  }

  openModal();
}
