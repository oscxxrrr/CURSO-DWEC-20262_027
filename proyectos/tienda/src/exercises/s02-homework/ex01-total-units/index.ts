import type { Product } from "../../../types/product";


/**
 * Calcula el numero total de unidades sumando el stock de todos los productos.
 * @param list - Array de productos
 * @returns El stock total acumulado
 */
export function totalUnits(list: Product[]): number {
  return list.reduce((accumulador, product) => accumulador + product.stock, 0);
}
