export function topLayout() {
  const topContent = document.querySelector(".topContent");

  const topContainer = document.createElement("div");
  topContainer.className = "topContainer";

  const navContainer = document.createElement("div");
  navContainer.className = "navContainer";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logoContainer";

  const iconContainer = document.createElement("div");
  iconContainer.className = "iconContainer";

  const rightGroup = document.createElement("div");
  rightGroup.className = "topContent-rightGroup";

  rightGroup.appendChild(logoContainer);
  rightGroup.appendChild(iconContainer);
  topContainer.appendChild(navContainer);
  topContainer.appendChild(rightGroup);
  topContent.appendChild(topContainer);
}
