import { createForm } from "./components/createForm";
import { createInputSearch } from "./components/createInputSearch";
import { createBookItem } from "./components/createItemLi";
import { createP } from "./components/createP";
import { createTitle } from "./components/createTitle";
import { createUlist } from "./components/createUlist";
import { getElement } from "./components/getElements";
import { DEFAULT_COVER, initialBooks } from "./services/books";
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


// imprimir por pantalla
const savedBooks = localStorage.getItem("books");
let state: AppState = {
  books: savedBooks ? JSON.parse(savedBooks) : initialBooks,
  search: ""
};

app.append(createTitle("Simulacro 1 - LIBRERIA", "h1"), input, form, paragraph, list);


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




// ----------- inicio de app ------------
// Nos aseguramos de guardarlo al inicio por si estaba vac¡o
if (!savedBooks) {
  localStorage.setItem("books", JSON.stringify(state.books));
}



render();


