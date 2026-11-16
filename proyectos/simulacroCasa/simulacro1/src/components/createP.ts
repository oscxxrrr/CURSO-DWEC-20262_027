export function createP(): HTMLParagraphElement {
  const text = document.createElement("p");
  text.textContent = `Total articulos: 0`;
  return text;
}
