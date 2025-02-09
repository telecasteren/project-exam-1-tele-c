export function setLogo() {
  const logoContainer = document.querySelector(".logoContainer");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logoDiv");

  const logoElement = document.createElement("h1");
  logoElement.id = "logoElement";
  logoElement.innerText = "unwired";

  logoElement.addEventListener("click", () => {
    window.location.href = "/";
  });

  logoDiv.appendChild(logoElement);
  logoContainer.prepend(logoDiv);
}
