import type { Product } from "../../../types/product";



/**
 *  Funcion que devuelve una lista de strings con los nombres de los productos con stock 0
 * @param list Descripción
 * @returns string[]
 */
export function soldOut(list: Product[]): string[] {
  return list.filter((prod) => prod.stock === 0).map((producto) => producto.name);
}
