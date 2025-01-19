export function uniqueHoverColors(rgbColor) {
  const [r, g, b] = rgbColor
    .match(/\d+/g)
    .map(Number)
    .map((c) => Math.min(255, c + 30));

  const hoverColor = `rgb(${r}, ${g}, ${b})`;

  return hoverColor;
}
