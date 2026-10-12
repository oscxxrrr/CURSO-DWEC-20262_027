import type { Product } from "../../../types/product";



/**
 *  Funcion que pasado una lista de productos, id producto, una cantidad devuelve true o false si es posible su compra
 * @param list productos
 * @param id producto
 * @param quantity de productos disp
 * @returns true o false dependiendo de su es posible su compra. 
 */
export function canBuy(list: Product[], id: number, quantity: number): boolean {
  const product = list.find((prod) => prod.id === id);

  return product !== undefined && quantity > 0 && quantity <= product.stock;
}
