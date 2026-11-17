import { createBookForm, createBookItem, createList, createSearchInput, createTitle, getElements } from "./components/dom";
import { DEFAULT_COVER, initialBooks } from "./services/books";
import "./style.css";
import type { AppState } from "./types/book";

// creacion de elementos
const app = getElements("#app", HTMLDivElement);
const inputSearch = createSearchInput();
const form = createBookForm();
const list = createList();
const paragraph = document.createElement("p");

app.append(createTitle("Biblioteca - OMC", "h1"), inputSearch, form, list);

// imprimir por pantalla
const savedBooks = localStorage.getItem("books");
let state: AppState = {
  books: savedBooks ? JSON.parse(savedBooks) : initialBooks,
  search: ""
};


// render

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.books.filter((b) => b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text));
  const item = visible.map(b => createBookItem(b, toggleFav, deleteBook));
  list.replaceChildren(...item);
  const favorites = state.books.filter((b) => b.favorite).length;
  paragraph.textContent = `Mostrando ${visible.length} de ${state.books.length} · Favoritos: ${favorites}`;
}




// ---------------- declariacion funciones ---------------
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

// ----------------- eventos --------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const title = String(data.get("title") ?? "").trim();
  const author = String(data.get("author") ?? "").trim();
  const year = Number(data.get("year"));
  const newBook = {
    id: Math.max(...state.books.map(b => b.id), 0) + 1,
    title: title,
    author: author,
    year: year,
    cover: DEFAULT_COVER,
    favorite: false
  };

  state = {
    ...state,
    books: [...state.books, newBook]
  };
  localStorage.setItem("books", JSON.stringify(state.books));
  form.reset();
  render();
});

inputSearch.addEventListener("input", () => {
  let valor = inputSearch.value.trim().toLowerCase();

  state = {
    ...state,
    search: valor
  };

  render();
});


render();
