export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`El selector ${selector} no se encuentra o no es de la instancia ${type}`);
  }
  return element;
}
