import type { Product } from "../../../types/product";


// Recibe una lista de productos y devuelve una lista de numeros, con el precio de cada articulo con su iva. 

const VAT = 0.21;

/**
 *  Funcion sacar todos los precios con IVA
 * @param myProduct Descripción
 * @returns Product[]
 */
export function pricesWithVat(myProduct: Product[]): number[] {
  return myProduct.map(product => Math.round(product.price * (1 + VAT)))

}
