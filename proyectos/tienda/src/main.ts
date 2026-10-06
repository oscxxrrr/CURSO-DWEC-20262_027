// Enunciado: Proycto creacion de una Tienda
// Autor: Óscar Martinez Cabrera
// Investigación: Fuentes consultadas
//

//--------- importacion -------
import type { Product } from "./types/product";
import { products } from "./data/products";
import { soldOut } from "./exercices/s01/ex02-product_stock_0";
import { byCategory } from "./exercices/s01/ex03-by-category";
import { priceOf } from "./exercices/s01/ex04-price-of";
import { canBuy } from "./exercices/s01/ex05-can-buy";
import { allInStock } from "./exercices/s01/ex06-think";

// mostrar todos los productos de mi tienda
console.log("Catalogo de productos TechStore: ", products);

// mostrar del primer producto
const first: Product | undefined = products[0];
console.log("Primer producto: ", first);

// mostras del primer producto el precio
// console.log("Precio del primer producto" first.price);


// array con precio de los productos con IVA incluido:

//  -------- EJERCICIO 02 --------
console.log('Ej02: ', soldOut(products));

// -------- EJERCICIO 03 -------
console.log('ej03', byCategory(products, 'audio').map((p) => p.name));
console.log('ej03', byCategory(products, 'monitors').map((p) => p.name));
console.log('ej03', byCategory([], 'audio'));


// -------- EJERCICIO 04 -------
console.log('ej04', priceOf(products, 3));
console.log('ej04', priceOf(products, 99));

// -------- EJERCICIO 05 ----------
console.log(
  'ej05',
  canBuy(products, 1, 2), // teclado, hay 5: true
  canBuy(products, 1, 6), // teclado, pide 6 y solo hay 5: false
  canBuy(products, 2, 1), // raton agotado: false
  canBuy(products, 99, 1), // no existe: false
  canBuy(products, 1, 0), // 0 unidades:  false
);

// --------- EJERCICIO 06 ------------
console.log('ej06', allInStock([]));
