export function createContactFormTitle() {
  const contactSectionContainer = document.querySelector(".contact-section");
  const contactTitle = document.createElement("h1");
  contactTitle.className = "contactFormTitle";
  contactTitle.innerText = "Get in touch";

  contactSectionContainer.prepend(contactTitle);
}
