import type { Product } from '../../../types/product';

export interface Summary {
  products: number;
  units: number;
  value: number;
}

export function summary(list: Product[]): Summary {
  return list.reduce(
    (acc, product) => ({
      products: acc.products + 1,
      units: acc.units + product.stock,
      value: acc.value + product.price * product.stock,
    }),
    { products: 0, units: 0, value: 0 }
  );
}
