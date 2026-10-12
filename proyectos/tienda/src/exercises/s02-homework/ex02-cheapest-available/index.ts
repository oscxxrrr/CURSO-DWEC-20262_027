import type { Product } from "../../../types/product";

export function cheapestAvailable(products: Product[]): Product | undefined {
  return products
    .filter(product => product.stock > 0)
    .toSorted((a, b) => a.price - b.price)[0];
}
