import type { Product } from "../types/product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error("Error en el selector de tipos");
  }
  return element;
}



// componente1 : recibe un texto y devuelve un h1

export function createTitle(text: string): HTMLHeadingElement {
  const tittle = document.createElement("h1");
  tittle.textContent = text;
  return tittle;
}

// componente2 : buscador 

export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.placeholder = "Buscar producto...";
  input.type = "search";
  return input;
}

// componente3 : ul vacio

export function createUl(): HTMLUListElement {
  return document.createElement("ul");
}

// componente4 : recibe un producto y devuelve su li bonito

export function createProductLi(product: Product): HTMLLIElement {
  const item = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = `${product.name} --- ${product.price.toFixed(2)} € --- ${product.favorite} ---> `;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Borrar";

  const btnFavs = document.createElement("button");
  button.type = "button";
  btnFavs.textContent = "☆";
  btnFavs.style.marginLeft = "8px";

  item.append(text, button, btnFavs);
  return item;
}

// componente5 : crear footer:
export function createFooter(name: string): HTMLElement {
  const footer = document.createElement("footer");

  footer.textContent = name;
  footer.style.color = "white";
  footer.style.background = "grey";
  return footer;
}


