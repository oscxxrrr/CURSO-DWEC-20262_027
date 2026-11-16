// vamos a construir las piezas que aparecen por pantalla

import { DEFAULT_COVER, initialBooks } from "../services/books";
import type { Book } from "../types/book";

export function getElements<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error("No encuentro el selector esperado");
  }

  return element;
}

// recibe un texto y un tipo y gemera um heading del tipo indicado
export function createTitle(text: string, type: string): HTMLHeadingElement {
  const title = document.createElement(type);
  title.textContent = text;
  return title;
}

// un search para buscar los libros
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.placeholder = "Buscar por titulo o autor";
  input.type = "search";
  return input;
}

// necesito un UL para pintar con LI todos los libros
export function createList(): HTMLUListElement {
  const list = document.createElement("ul");
  list.className = "catalog";
  return list;
}

export function createBookItem(book: Book, onToggleFavorite: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const item = document.createElement("li");
  const cover = document.createElement("img");
  const title = document.createElement("strong");
  const span = document.createElement("span");
  const btnFav = document.createElement("button");
  const btnDelete = document.createElement("button");

  cover.src = book.cover;
  cover.alt = `Portada de ${book.title}`;

  title.textContent = book.title;

  span.textContent = `${book.author} , ${book.year}`;

  btnFav.type = "button";
  btnFav.textContent = book.favorite ? "★ Favorito" : "☆ Favorito";
  btnFav.addEventListener("click", () => onToggleFavorite(book.id));

  btnDelete.type = "button";
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => onDelete(book.id));

  // añadir elementos al LI:
  item.append(cover, title, span, btnFav, btnDelete);
  return item;
}


export function createBookForm(): HTMLFormElement {
  const form = document.createElement("form");
  const inputTitle = document.createElement("input");
  const inputAuthor = document.createElement("input");
  const inputYear = document.createElement("input");
  const btnAdd = document.createElement("button");

  inputTitle.placeholder = "Titulo";
  inputTitle.name = "title";
  inputAuthor.required = true;

  inputAuthor.placeholder = "Autor";
  inputAuthor.name = "author";
  inputAuthor.required = true;

  inputYear.placeholder = "Año";
  inputYear.name = "year";
  inputYear.type = "number";

  btnAdd.textContent = "Añadir";
  btnAdd.type = "submit";


  form.append(inputTitle, inputAuthor, inputYear, btnAdd);
  return form;
}


