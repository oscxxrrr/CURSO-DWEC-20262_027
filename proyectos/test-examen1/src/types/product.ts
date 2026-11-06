// tipos para mis productos

export interface Product {
  readonly id: number; // el id no cambia nunca
  name: string;
  price: number;
  favorite: boolean; // true si el user a marcado como favoito
}

export interface NewProduct {
  name: string;
  price: number;
}
