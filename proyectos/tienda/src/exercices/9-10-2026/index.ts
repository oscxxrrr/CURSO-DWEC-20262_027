// Crear una funcion q permita añadir productos a mi Data
// Restricciones: 
//
// ------------ Importaciones ----------------
import { products } from "../../data/products";
import type { Product } from "../../types/product";





// ------------- declarar variables y funciones ------------
// const copy = [...products];

const original = { name: 'teclado', price: 80 }
const other = original;
other.price = 0;
console.log(original.price);

//  original -----
//                | ----------- { name: 'teclado', price 0}
//  other --------

// ASI NO SE DEBE DE HACER UNA COPIA

// *********************************************************************************
export type NewProduct = Omit<Product, 'id'>; // **** <-- tipo de utilidad ( utility type)
// crea un nuevo tipo igual q product pero sin ID, por eso Omit<..., 'id'>
// ********************************************************************************

// crear una funcion que me actualice el precio de los productos, le paso el id y nuevo precio.
export function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list.map((p) => (p.id === id ? { ...p, price } : p));
}


// actualizaciones parciales.
export type ProductChanges = Partial<Omit<Product, 'id'>>;
// se lee de dentro hacia afuera <-- quita el id de Product, y lo que queda hazlo Opcional. 
// con esto me aseguro q nunca cambiare el id

function updateProduct(list: Product[], id: number, change: ProductChanges): Product[] {
  return list
    .map((p) => (p.id === id ? { ...p, ...change } : p));
}

//update product (products, 1, {stock:10, name: 'Teclado Gamming') ====> CRUD: c: create, r: read, u: update, d: delete




// borrar product
function deleteProduct(list: Product[], id: number): Product[] {
  return list
    .filter((p) => p.id !== id);
}






// EJERCICIO
// 1. Crear un type (cart.ts)llamado CartLine --> que tenga el id del producto y la cantidad a comprar
// recuerda exportar
//
// 2. Añadir elementos al carrito
// 3. Borrar elementos del carrito
// 4. Obtener el total del carrito











// -------------inicio de la aplicacion -------------
