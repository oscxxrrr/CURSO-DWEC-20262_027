import type { Product } from "../../../types/product";



/**
 *  Funcion que devuelve el precio del producto dando un array de productos y un id especifico.
 * @param list de productos
 * @param id especifico para ver su precio
 * @returns number or null
 */
export function priceOf(list: Product[], id: number): number | nul {
  const product = list.find((prod) => prod.id == id);

  if (product === undefined) {
    return null;
  } else {
    return product.price;
  }
}

// Pregunta ¿Por que no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: porque podria haber algun producto por 0€. 
