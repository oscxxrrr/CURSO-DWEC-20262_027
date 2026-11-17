export function createP(): HTMLParagraphElement {
  const text = document.createElement("p");
  text.textContent = `Mostrando 10 de 10 · favoritos: 0`;
  return text;
}
