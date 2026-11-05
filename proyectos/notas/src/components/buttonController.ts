/**
 *  Descripción de la función
 * @param text Descripción
 * @param cssArray Descripción
 * @returns Descripción
 */
export function createBtnSearch(text: string, cssArray: string[]): HTMLButtonElement {
  let btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add(...cssArray);
  return btn;
}
