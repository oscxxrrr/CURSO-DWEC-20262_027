// Enunciado: Proycto creacion de una Tienda
// Autor: Óscar Martinez Cabrera
// Investigación: Fuentes consultadas
//

// --- Imports arriba del todo ---
import { products } from "./data/products";
import { totalUnits } from "./exercices/s02-homework/ex01-total-units";
import { cheapestAvailable } from "./exercices/s02-homework/ex02-cheapest-available";

// --- ej01 ---
console.log("ej01", totalUnits(products));
console.log("ej01", totalUnits([]));

// ---- ej02 ---
const cheapest = cheapestAvailable(products);
if (cheapest !== undefined) {
  console.log('ej02', cheapest.name);
}
console.log('ej02', cheapestAvailable([]));
