import { createProductLi, createSearchInput, createTitle, createUl, getElement } from './components/dom'
import './style.css'
import { initialProducts } from './services/products';
import type { Product } from './types/product';

// declaraciones
const app = getElement("#app", HTMLDivElement);
const ulist = createUl();
const searchInput = createSearchInput();



// ---------------------- DECLARACION FUNCIONES ---------------------------



// ---------------------- INICIO APLICACION ---------------------------
app.append(createTitle("PRODUCTOS: "), searchInput, ulist);

// Hacemos un map de cada producto
// y usaremos un replaceChildren para remplazar todos los elementos que tenga la lista (ulist)

// forma peor pero rapida
// ulist.replaceChildren(...initialProducts.map(createProductLi));

// La libreta original (data original)

interface AppState {
  products: readonly Product[];
  search: string;
}

// 1. - estado de la libreta (usamos let para modificarlo)
let state: AppState = { products: initialProducts, search: "" };

// 2. - render de la libreta y la copia en la pantalla
function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text));

  const items = visible.map((product) => {
    const item = createProductLi(product);
    item.querySelector("button")?.addEventListener("click", () => {
      // ahora si que cambiamos la libreta y copiamos otra vez
      state = { ...state, products: state.products.filter(p => p.id !== product.id) }
      render();
    });
    return item;
  })
  ulist.replaceChildren(...items)
}

searchInput.addEventListener("input", () => {
  state = { ...state, search: searchInput.value.trim().toLowerCase() }
  render();
})

render();
