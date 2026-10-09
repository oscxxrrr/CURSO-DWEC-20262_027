// Enunciado: Modelo CRUD en un carrito
// Autor: Oscar Martinez Cabrera
// Investigación: Fuentes consultadas
//



// EJERCICIO
// 1. Crear un type (cart.ts)llamado CartLine --> que tenga el id del producto y la cantidad a comprar
// recuerda exportar
//

import type { Cart } from "../../types/cart";

// 2. Añadir elementos al carrito
/**
 *  Funcion que añade un producto al carrito
 * @param list Descripción
 * @param id Descripción
 * @param quantity Descripción
 * @returns Descripción
 */

export function addToCart(cart: Cart, productId: number): Cart {
  const exist = cart.some(p => p.productId === productId);
  if (exist) {
    return cart
      .map((p) => p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p)

  } else {
    return [...cart, { productId, quantity: 1 }];
  }
}


// 3. Borrar elementos del carrito

export function deleteProduct(cart: Cart, productId: number): Cart {
  const exist = cart.some(p => p.productId === productId);
  const check = cart.filter((p) => p.productId)
  if (exist) {
    return cart
      .map((p) => p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p)

  } else {
    return [...cart];
  }

}

// 4. Obtener el total del carrito



