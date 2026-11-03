import type { Product } from "../types/product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);

  if (!(element instanceof type)) {
    throw new Error(`No se encuentra ${selector} o no es del tipo esperado`);
  }

  return element;
}

export function createCard(p: Product): HTMLLIElement {
  // creo li
  const li = document.createElement('li');
  li.classList.add('card');
  if (p.stock === 0) li.classList.add("card-agotado");

  // creo etiqueta name
  const name = document.createElement("span");
  name.textContent = `${p.name} : `;

  // etiqueta price
  const price = document.createElement("span");
  price.classList.add("card-price");
  price.textContent = `${p.price}€`;

  li.append(name, price); // varios hijos de una vez
  return li;
}

export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
  const span = document.createElement("span");
  span.classList.add(...cssArray);
  span.textContent = text;
  return span;
}


