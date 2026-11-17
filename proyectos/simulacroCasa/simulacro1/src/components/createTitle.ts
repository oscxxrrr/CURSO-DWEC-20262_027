export function createTitle(text: string, type: "h1" | "h2" | "h3" | "h4"): HTMLHeadingElement {
  const title = document.createElement(type);
  title.textContent = text;
  return title;
}
