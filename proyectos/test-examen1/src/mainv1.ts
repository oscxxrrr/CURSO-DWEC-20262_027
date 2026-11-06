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

// pintar los productos que reciba ( modo pro )
function paint(products: readonly Product[]): void {
  const items = products.map((p) => {
    const item = createProductLi(p);
    return item;
  })
  ulist.replaceChildren(...items)
}



// funcion para cada tecla q pulse
searchInput.addEventListener("input", () => {
  const valor = searchInput.value.trim().toLowerCase();
  paint(initialProducts.filter((p) => p.name.toLowerCase().includes(valor)));
})

paint(initialProducts);
