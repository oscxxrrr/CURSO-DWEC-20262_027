import { createForm } from "./components/createForm";
import { createInputSearch } from "./components/createInputSearch";
import { createBookItem } from "./components/createItemLi";
import { createP } from "./components/createP";
import { createTitle } from "./components/createTitle";
import { createUlist } from "./components/createUlist";
import { getElement } from "./components/getElements";
import { DEFAULT_COVER, initialBooks } from "./services/books";
import { contador } from "./services/contador";
import "./style.css";
import type { AppState, Book } from "./types/book";



// creacion de elementos:
const app = getElement("#app", HTMLDivElement);
const input = createInputSearch();
const list = createUlist();
const form = createForm();
const paragraph = createP();


app.append(createTitle("Simulacro 1 - LIBRERIA", "h1"), input, form, paragraph, list);



// imprimir por pantalla
const savedBooks = localStorage.getItem("books");
let state: AppState = {
  books: savedBooks ? JSON.parse(savedBooks) : initialBooks,
  search: ""
};

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.books.filter(b => b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text));

  const items = visible.map(b => createBookItem(b, toggleFav, deleteBook));

  list.replaceChildren(...items);
}

//boton añadir libro
const inputTitle = getElement(`input[name = "title"]`, HTMLInputElement);
const inputAuthor = getElement(`input[name = "author"]`, HTMLInputElement);
const inputYear = getElement(`input[name = "year"]`, HTMLInputElement);

form.addEventListener("submit", () => {
  const newBook: Book = {
    id: Math.max(...state.books.map(b => b.id), 0) + 1,
    title: inputTitle.value,
    author: inputAuthor.value,
    year: Number(inputYear.value),
    cover: DEFAULT_COVER
  };

  state = {
    ...state,
    books: [...state.books, newBook]
  };

  localStorage.setItem("books", JSON.stringify(state.books));
  render();

});

// funciones
function toggleFav(id: Number) {
  const updateBooks = state.books.map((b) => b.id === id ? { ...b, favorite: !b.favorite } : b);

  state = {
    ...state,
    books: updateBooks
  };
  localStorage.setItem("books", JSON.stringify(updateBooks));
  render();
}
function deleteBook(id: Number) {
  const updateBooks = state.books.filter((b) => b.id !== id);

  state = {
    ...state,
    books: updateBooks
  };
  localStorage.setItem("books", JSON.stringify(updateBooks));
  render();
}

// ----------- inicio de app ------------
// Nos aseguramos de guardarlo al inicio por si estaba vac¡o
if (!savedBooks) {
  localStorage.setItem("books", JSON.stringify(state.books));
}

input.addEventListener("input", () => {
  let valor = input.value.trim().toLowerCase();

  state = {
    ...state,
    search: valor
  };
  render();
});

paragraph.textContent = contador((state.books));

render();


