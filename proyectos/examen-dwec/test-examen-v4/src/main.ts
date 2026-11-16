// test-examen-v4 ú Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
import { createBookForm, createBookItem, createList, createSearchInput, createTitle, getElements } from "./components/dom";
import "./style.css";
import { DEFAULT_COVER, initialBooks } from "./services/books";
import type { AppState } from "./types/book";

const app = getElements("#app", HTMLDivElement);

// buscador de libros
const input = createSearchInput();

// formulario para a¤adir libros
const form = createBookForm();

//dato sobre libros y favoritos


// lista con todos los libros (ul -> li de libros)
const list = createList();

// necesitamos el estado: recuperamos de localStorage o usamos initialBooks por defecto
const savedBooks = localStorage.getItem("books");
let state: AppState = {
  books: savedBooks ? JSON.parse(savedBooks) : initialBooks,
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
  const updatedBooks = state.books.map(b => (b.id === id ? { ...b, favorite: !b.favorite } : b));

  state = {
    ...state,
    books: updatedBooks
  };

  // Guardar en localStorage
  localStorage.setItem("books", JSON.stringify(updatedBooks));
  render();
}

function deleteBook(id: number): void {
  const updatedBooks = state.books.filter(b => b.id !== id);

  state = {
    ...state,
    books: updatedBooks
  };

  // Guardar en localStorage
  localStorage.setItem("books", JSON.stringify(updatedBooks));
  render();
}

// ------------------ inicio de aplicacion ----------------------

// Nos aseguramos de guardarlo al inicio por si estaba vac¡o
if (!savedBooks) {
  localStorage.setItem("books", JSON.stringify(state.books));
}

// seleccionamos los inputs
const inputTitle = getElements(`input[name="title"]`, HTMLInputElement);
const inputYear = getElements(`input[name="year"]`, HTMLInputElement);
const inputAuthor = getElements(`input[name="author"]`, HTMLInputElement);

form.addEventListener("submit", () => {

  const newBook = {
    id: Math.max(...state.books.map(b => b.id), 0) + 1,
    title: inputTitle.value,
    author: inputAuthor.value,
    year: Number(inputYear.value),
    cover: DEFAULT_COVER,
    favorite: false
  };

  state = {
    ...state,
    books: [...state.books, newBook]
  };
  localStorage.setItem("books", JSON.stringify(state.books));
  render();
  form.reset();
});

input.addEventListener("input", () => {
  let valor = input.value.trim().toLowerCase();

  state = {
    ...state,
    search: valor
  };
  render();
});

render();
