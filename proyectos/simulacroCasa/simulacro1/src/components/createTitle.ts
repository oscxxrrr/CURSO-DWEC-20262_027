export function createTitle(text: string, type: string): HTMLHeadingElement {
  const title = document.createElement(type);
  title.textContent = text;
  return title;
}
