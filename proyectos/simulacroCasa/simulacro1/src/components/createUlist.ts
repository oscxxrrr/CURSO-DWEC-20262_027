export function createUlist(): HTMLUListElement {
  const list = document.createElement("ul");
  list.className = "catalog";
  return list;
}
