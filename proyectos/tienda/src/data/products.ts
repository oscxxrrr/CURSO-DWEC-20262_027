// TechStore Oscar Martinez Cabrera
import type { CartLine } from '../types/cart';
import type { Product } from '../types/product';

export const products: Product[] = [
  { id: 1, name: 'Teclado mecánico', price: 80, category: 'peripherals', stock: 5 },
  { id: 2, name: 'Ratón inalámbrico', price: 25, category: 'peripherals', stock: 0 },
  { id: 3, name: 'Monitor 27"', price: 220, category: 'monitors', stock: 3 },
  { id: 4, name: 'Auriculares', price: 60, category: 'audio', stock: 10 },
  { id: 5, name: 'Monitor 24"', price: 140, category: 'monitors', stock: 0 },
  { id: 6, name: 'Micrófono USB', price: 45, category: 'audio', stock: 2 },
];

export const productLine: Cart = [ // no pongo q Cart es un [] porque ya lo tengo creado en types.
  { productId: 1, quantity: 20 },
  { productId: 2, quantity: 40 },
  { productId: 3, quantity: 12 },
  { productId: 4, quantity: 21 }
]
