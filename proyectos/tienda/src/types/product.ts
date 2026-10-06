
// un tipo describe la forma de un dato. 
export type Category = 'monitors' | 'audio' | 'GPU' | 'peripherals';

// una interfaz es como un contrado con los valores que debe tener y el tipo. typescript firma y si se rompe se queja
// Los elementos de una interface van separados por ; o enter (mejor ;)
export interface Product {
  id: number;
  name: string;
  price: number; // precios euros sin IVA
  category: Category;
  stock: number;
}



