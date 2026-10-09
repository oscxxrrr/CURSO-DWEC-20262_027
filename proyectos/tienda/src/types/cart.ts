export interface CartLine {
  productId: number;
  quantity: number;
}

export type Cart = CartLine[];
