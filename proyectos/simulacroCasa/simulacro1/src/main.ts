import { createForm } from "./components/createForm";
import { createInputSearch } from "./components/createInputSearch";
import { createBookItem } from "./components/createItemLi";
import { createP } from "./components/createP";
import { createTitle } from "./components/createTitle";
import { createUlist } from "./components/createUlist";
import { getElement } from "./components/getElements";
import { DEFAULT_COVER, initialBooks } from "./services/books";
import { loadBooks, saveBooks } from "./services/storage";
// import { contador } from "./services/contador";
import "./style.css";
import type { AppState, Book } from "./types/book";



// creacion de elementos:
const app = getElement("#app", HTMLDivElement);
const input = createInputSearch();
const list = createUlist();
const form = createForm();
const formError = document.createElement("p");
formError.setAttribute("rol", "alert");
formError.tabIndex = -1;
form.append(formError);
const paragraph = createP();

const storageMessage = document.createElement("p");
storageMessage.setAttribute("role", "status");


// imprimir por pantalla
let state: AppState = {
  books: loadBooks() ?? initialBooks,
  search: ""
};

app.append(createTitle("Simulacro 1 - LIBRERIA", "h1"), input, form, paragraph, storageMessage, list);


function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.books.filter(b => b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text));

  const items = visible.map(b => createBookItem(b, toggleFav, deleteBook));

  list.replaceChildren(...items);

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
  persistentBook();
  render();
}
function deleteBook(id: Number) {
  const updateBooks = state.books.filter((b) => b.id !== id);

  state = {
    ...state,
    books: updateBooks
  };
  persistentBook();
  render();
}

function persistentBook(): void {
  storageMessage.textContent = saveBooks(state.books) ? "" : "No se ha podido guardar en el localstorage";
}

// ----------- eventos ------------------
input.addEventListener("input", () => {
  let valor = input.value.trim().toLowerCase();

  state = {
    ...state,
    search: valor
  };
  render();
});


form.addEventListener("submit", (event) => {
  event.preventDefault(); // voy a parar la accion del submit por defecto
  // cogemos la data del formulario
  const data = new FormData(form);
  const title = String(data.get("title") ?? "").trim();
  const author = String(data.get("author") ?? "").trim();
  const year = Number(data.get("year"));

  if (title === "") {
    formError.textContent = "Esribe el titulo del libro";
    formError.focus();
    return;
  }
  if (author === "") {
    formError.textContent = "Esribe el nombre del autor";
    formError.focus();
    return;
  }
  if (!Number.isInteger(year) || year <= 0 || year > 2026) {
    formError.textContent = "Esribe un año mayor que 0";
    formError.focus();
    return;
  }

  formError.textContent = "";

  const newBook: Book = {
    id: Math.max(...state.books.map(b => b.id)) + 1,
    title, // --> no hace falta se llama igual
    author,
    year,
    cover: DEFAULT_COVER,
    favorite: false
  };

  state = {
    ...state,
    books: [...state.books, newBook]
  };

  persistentBook();
  form.reset();
  render();

});

render();


