/**
 *  Descripción de la función
 * @param text Descripción
 * @param cssArray Descripción
 * @returns Descripción
 */
export function createInput(text: string, cssArray: string[]): HTMLInputElement {
  const input = document.createElement("input");
  input.classList.add(...cssArray);
  input.placeholder = text;
  return input;
}

