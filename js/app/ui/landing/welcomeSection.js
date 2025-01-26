export function welcomeSection() {
  const landingSection = document.querySelector(".landing-section");

  const welcomeMessage = document.createElement("div");
  welcomeMessage.className = "welcomeMessage";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = `Hello,
  my name is Tele`;

  const tagline = document.createElement("h2");
  tagline.id = "welcomeTagline";
  tagline.textContent =
    "and I meet life with tech — a little late to the game..";

  const description = document.createElement("p");
  description.id = "welcomeDescription";
  description.innerText = `
  I write a mix of low-key tech insights from a personal perspective, crafted for the less curious type. Exploring the latest in tech all too late,
  throwing in some real-life moments, I connect the dots between innovation and everyday bullshit.
`;

  const featuredTitle = document.createElement("h3");
  featuredTitle.className = "featuredTitle";
  featuredTitle.innerText = "Featured posts:";

  welcomeMessage.appendChild(title);
  welcomeMessage.appendChild(tagline);
  welcomeMessage.appendChild(description);

  landingSection.prepend(featuredTitle);
  landingSection.prepend(welcomeMessage);
}
