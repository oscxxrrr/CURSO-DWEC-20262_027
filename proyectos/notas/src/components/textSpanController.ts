/**
 *  Descripción de la función
 * @param text Descripción
 * @param cssArray Descripción
 * @returns Descripción
 */
export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
  const span = document.createElement("span");
  span.classList.add(...cssArray);
  span.textContent = text;
  return span;
}

