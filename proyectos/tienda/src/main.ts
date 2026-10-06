// Enunciado: Proycto creacion de una Tienda
// Autor: Óscar Martinez Cabrera
// Investigación: Fuentes consultadas
//

//--------- importacion -------
import type { Product } from "./types/product";
import { products } from "./data/products";

// mostrar todos los productos de mi tienda
console.log("Catalogo de productos TechStore: ", products);

// mostrar del primer producto
const first: Product | undefined = products[0];
console.log("Primer producto: ", first);

// mostras del primer producto el precio
// console.log("Precio del primer producto" first.price);


// array con precio de los productos con IVA incluido:

