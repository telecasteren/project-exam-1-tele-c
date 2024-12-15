// NOT IN USE --

// If screen size <= 1100px, reorder container hierarchy
// function smallerScreens(changeEvent) {
//   const smallScreens = changeEvent
//     ? changeEvent.matches
//     : window.matchMedia("(max-width: 1100px)").matches;

//   container.innerHTML = "";

//   if (smallScreens) {
//     container.appendChild(blogTitle);
//     container.appendChild(carousel);
//   } else {
//     container.appendChild(carousel);
//     container.appendChild(blogTitle);
//   }
// }

// const screenSizeChanges = window.matchMedia("(max-width: 1100px)");
// screenSizeChanges.addEventListener("change", smallerScreens);

// smallerScreens();
