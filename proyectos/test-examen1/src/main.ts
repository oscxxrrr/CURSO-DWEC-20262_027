import { createFooter, createProductLi, createSearchInput, createTitle, createUl, getElement } from './components/dom';
import './style.css';
import { initialProducts } from './services/products';
import type { Product } from './types/product';

// declaraciones
const app = getElement("#app", HTMLDivElement);
const ulist = createUl();
const searchInput = createSearchInput();
const footer = createFooter("Oscar Martinez Cabrera");

// La libreta original (data original)
interface AppState {
  products: readonly Product[];
  search: string;
}

// ---------------------- DECLARACION FUNCIONES ---------------------------

// 2. - render de la libreta y la copia en la pantalla
function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text));
  const items = visible.map((product) => createProductLi((product, toggleFav, deleteProduct),);
  ulist.replaceChildren(...items);
}

function deleteProduct(id: number): void {
  state = { ...state, products: state.products.filter(p => p.id !== id) };
  // crear una funcion que guarde en el localStorage nuestros productos
  render();
}

function toggleFav(id: number): void {
  state = { ...state, products: state.products.map((p) => p.id === id ? { ...p, favorite: !p.favorite } : p, ""), };
  // crear una funcion que guarde en el localStorage nuestros productos
  render();

}




// ---------------------- INICIO APLICACION ---------------------------
app.append(createTitle("PRODUCTOS: "), searchInput, ulist, footer);

// Hacemos un map de cada producto
// y usaremos un replaceChildren para remplazar todos los elementos que tenga la lista (ulist)

// forma peor pero rapida
// ulist.replaceChildren(...initialProducts.map(createProductLi));



// 1. - estado de la libreta (usamos let para modificarlo)
let state: AppState = { products: initialProducts, search: "" };


// ------------- EVENTOS -------------
searchInput.addEventListener("input", () => {
  state = { ...state, search: searchInput.value.trim().toLowerCase() };
  render();
});

render();



/*
  * Yo quiero quitar 1 elemento --> lista.filter((x) => x.id !== id);
  * Cambiar uno                 --> lista.map((x) => x.id === id ? {...x, sudadera: "rojo"} : x);
  * Añadir uno                  --> [...list, nuevoElemento];
  *
  *
  * */
