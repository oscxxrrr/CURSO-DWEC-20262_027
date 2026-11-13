// test-examen-v4 · Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
import { createBookForm, createBookItem, createList, createSearchInput, createTitle, getElements } from "./components/dom";
import "./style.css";
import { initialBooks } from "./services/books";
import type { AppState } from "./types/book";

const app = getElements("#app", HTMLDivElement);

// buscador de libros
const input = createSearchInput();

// formulario para añadir libros
const form = createBookForm();

//dato sobre libros y favoritos


// lista con todos los libros (ul -> li de libros)
const list = createList();

// necesitamos el estado:
let state: AppState = {
  books: initialBooks,
  search: ""
};

app.append(createTitle("Mi Biblioteca", "h1"), input, form, list);

// paso 5: creamos function de renderizar
function render(): void {
  // calcular lo que se ve:
  const text = state.search.trim().toLowerCase();
  // aqui ponemos cosas para filtrar
  const visible = state.books.filter(b => b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text));

  const items = visible.map(b => createBookItem(b, toggleFav, deleteBook));

  list.replaceChildren(...items);
}

// ----------- declaracion funciones -----------------------
function toggleFav(id: number) {
  state = {
    ...state,
    books: state.books.map(b => (b.id === id ? { ...b, favorite: !b.favorite } : b))
  };
  render();
}

function deleteBook(id: number): void {
  state = {
    ...state,
    books: state.books.filter(b => b.id !== id)
  };
  render();
}

// ------------------ inicio de aplicacion ----------------------

localStorage.setItem("books", JSON.stringify(state.books));

render();
