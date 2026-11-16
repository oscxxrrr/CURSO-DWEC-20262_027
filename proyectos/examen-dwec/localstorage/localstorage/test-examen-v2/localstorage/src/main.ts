// =====================================================================
// TEST-EXAMEN V2 · La receta de los 6 pasos
// ---------------------------------------------------------------------
//   1. Tipos        -> types/product.ts
//   2. Datos        -> services/products.ts
//   3. Componentes  -> components/dom.ts
//   4. Estado       -> aquí (let state)
//   5. render()     -> aquí
//   6. Eventos      -> aquí
//   + Guardar       -> services/storage.ts (localStorage)
//
// REGLA DE ORO:
//   En un evento NUNCA se toca la pantalla.
//   Se cambia el estado y se llama a render().
// =====================================================================

import "../src/style.css";
import {
  createList,
  createProductForm,
  createProductItem,
  createSearchInput,
  createTitle,
  getElement,
} from "./components/dom";
import { initialProducts } from "./services/products";
import { loadProducts, saveProducts } from "./services/storage";
import type { AppState } from "./types/product";

// ---------------------------------------------------------------------
// Montaje: los elementos FIJOS se crean y se añaden UNA sola vez.
// Lo único que se vuelve a pintar es el contenido de la lista.
// ---------------------------------------------------------------------
const app = getElement("#app", HTMLDivElement);
const searchInput = createSearchInput();
const form = createProductForm();
const counter = document.createElement("p"); // "Mostrando X de Y"
const list = createList();

app.append(createTitle("Productos"), searchInput, form, counter, list);

// =====================================================================
// PASO 4 · ESTADO
// ---------------------------------------------------------------------
// La "libreta": la única fuente de verdad. Usamos `let` porque cada
// cambio crea un estado NUEVO (no modificamos el anterior).
// =====================================================================
// Si hay productos guardados los usamos; si no (?? = "si es null"), los iniciales.
let state: AppState = {
  products: loadProducts() ?? initialProducts,
  search: "",
};

// =====================================================================
// PASO 5 · RENDER
// ---------------------------------------------------------------------
// Lee el estado y pinta la pantalla desde cero.
// No cambia el estado. Solo lo copia a la pantalla.
// =====================================================================
function render(): void {
  // 5.1 Calcular lo que se ve (no se guarda: se calcula cada vez)
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text));

  // 5.2 Crear un <li> por producto visible
  const items = visible.map((product) =>
    createProductItem(product, toggleFavorite, deleteProduct),
  );

  // 5.3 Sustituir TODO el contenido de la lista de una vez
  list.replaceChildren(...items);

  // 5.4 El resto de cosas que dependen del estado
  counter.textContent = `Mostrando ${visible.length} de ${state.products.length}`;
}

// =====================================================================
// PASO 6 · EVENTOS (acciones)
// ---------------------------------------------------------------------
// Todas siguen el mismo molde:
//     state = { ...state, campoQueCambia: nuevoValor };
//     saveProducts(state.products);   <- solo si cambia la lista
//     render();
// ...state copia lo que no cambia; luego sobrescribimos lo que sí.
// =====================================================================

// Borrar: me quedo con todos MENOS el del id pulsado
function deleteProduct(id: number): void {
  state = { ...state, products: state.products.filter((p) => p.id !== id) };
  saveProducts(state.products); // guardar: la lista ha cambiado
  render();
}

// Favorito: copio todos; al del id pulsado le doy la vuelta a favorite
function toggleFavorite(id: number): void {
  state = {
    ...state,
    products: state.products.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p)),
  };
  saveProducts(state.products); // guardar: la lista ha cambiado
  render();
}

// Buscar: guardo lo escrito TAL CUAL; render se encarga de minúsculas y espacios.
// Aquí NO llamamos a saveProducts: buscar no cambia la lista.
searchInput.addEventListener("input", () => {
  state = { ...state, search: searchInput.value };
  render();
});

// Añadir: leer el formulario -> validar -> cambiar estado -> render
form.addEventListener("submit", (event) => {
  event.preventDefault(); // sin esto la página se recarga y perdemos el estado

  // FormData lee los inputs por su atributo `name`. Todo llega como texto.
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const price = Number(data.get("price")); // conversión: texto -> número

  // Validación en ejecución (TypeScript no comprueba lo que escribe el usuario)
  if (name === "" || !Number.isFinite(price) || price < 0) {
    return; // datos no válidos: no tocamos el estado
  }

  // id nuevo = el mayor que exista + 1 (así nunca se repite)
  const newId = Math.max(0, ...state.products.map((p) => p.id)) + 1;

  state = {
    ...state,
    products: [...state.products, { id: newId, name, price, favorite: false }],
  };
  saveProducts(state.products); // guardar: la lista ha cambiado
  render();
});

// ---------------------------------------------------------------------
// Arranque: pintamos por primera vez con el estado inicial
// ---------------------------------------------------------------------
render();
