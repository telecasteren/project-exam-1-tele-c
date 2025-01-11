export function footerOnScroll() {
  const footer = document.querySelector("footer");
  if (window.scrollY > 70) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
}

export function footerHtml() {
  const currentYear = new Date().getFullYear();

  const footer = document.createElement("footer");

  const span = document.createElement("span");
  span.textContent = `© 2024 - ${currentYear} `;

  const portfolioLink = document.createElement("a");
  portfolioLink.href = "https://telecasternilsen.netlify.app/";
  portfolioLink.textContent = "Tele Caster Nilsen";

  const ul = document.createElement("ul");

  const links = [
    { href: "/blog/about/", text: "About" },
    { href: "/blog/writing/", text: "Writing" },
    { href: "/blog/contact/", text: "Contact" },
  ];

  links.forEach((linkData) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = linkData.href;
    a.textContent = linkData.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  span.appendChild(portfolioLink);
  footer.appendChild(span);
  footer.appendChild(ul);
  document.body.appendChild(footer);
}
