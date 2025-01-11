import { topContent } from "/js/utils/general/constants.js";
import { uniqueHoverColors } from "/js/utils/helpers/uniqueHoverColors.js";

export function navBar() {
  const nav = document.createElement("nav");
  nav.classList.add("navBar");

  const ul = document.createElement("ul");

  const links = [
    { href: "/", text: "Home", id: "homeBtn", color: "var(--color-btn-one)" },
    {
      href: "/blog/about/",
      text: "About",
      id: "aboutBtn",
      color: "var(--color-btn-two)",
    },
    {
      href: "/blog/writing/",
      text: "Writing",
      id: "storiesBtn",
      color: "var(--color-btn-three)",
    },
    {
      href: "/blog/contact/",
      text: "Contact",
      id: "contactBtn",
      color: "var(--color-btn-four)",
    },
  ];

  links.forEach(({ href, text, id, color }) => {
    const li = document.createElement("li");
    li.classList.add("navLi");

    const link = document.createElement("a");
    link.href = href;
    link.id = id;
    link.textContent = text;
    link.classList.add("navLinks");
    link.style.setProperty("--button-color", color);

    li.appendChild(link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  topContent.prepend(nav);

  // Brighten button color upon hover
  const root = document.documentElement;
  const navLinks = nav.querySelectorAll(".navLinks");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const btnColor =
        getComputedStyle(link).getPropertyValue("background-color");
      const hoverColor = uniqueHoverColors(btnColor);
      root.style.setProperty("--hover-color", hoverColor);
    });

    link.addEventListener("mouseout", () => {
      root.style.removeProperty("--hover-color");
    });
  });
}
