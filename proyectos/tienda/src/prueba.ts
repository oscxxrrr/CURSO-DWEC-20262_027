import { products } from "./data/products";


// ------------- DATOS ---------------
// export const products: Product[] = [
//   { id: 1, name: 'Teclado mecánico', price: 80, category: 'peripherals', stock: 5 },
//   { id: 2, name: 'Ratón inalámbrico', price: 25, category: 'peripherals', stock: 0 },
//   { id: 3, name: 'Monitor 27"', price: 220, category: 'monitors', stock: 3 },
//   { id: 4, name: 'Auriculares', price: 60, category: 'audio', stock: 10 },
//   { id: 5, name: 'Monitor 24"', price: 140, category: 'monitors', stock: 0 },
//   { id: 6, name: 'Micrófono USB', price: 45, category: 'audio', stock: 2 },
// ];

// Metodos repaso:

// filter --> devuelve un array nueva
products
  .filter((product) => product.stock > 3) // <-- [{id: 1, ...} , {id: 2, ...}]
  .map((productName) => productName.name) // <-- [teclado mecainico, auriculares]
  .some(name => name === 'Auriculares'); // <-- .some(): true or false si alguno cumple condicion (en este caso true)
//.every() devuelve true o false si todos cumplen condicion
//.includes() true o flase si
//.indexOf() posicion donde se encuentra eso que buscas o -1 si no lo encuentra.

products
  .find((product) => product.category === 'peripherals'): // devuelve 1 objeto que cumple esa posicion pero solo el primero que encuentra.


// METODO reduce() --> solo para arrays y devuelve una unica cosa.

console.log(products[0]?.vat ?? console.log("No existe la clave")); // si existe lo devuelve y si no esta sale el mensaje del console.log
// variable?. --> devuelve undefined si no existe o devuelve lo q toca si esta
// ?? -->  si esto de la izquierda es null o undefined ?? entonces devuelve esto



// calcular el valor total de mis productos: suma de precis * stock)

let total = 0;
for (const p of products) {
  total += p.price * p.stock;
}

// [].reduce( ( Acumulador, elemento_q_itera, posicion, array_partida ) =>   , valor_inicial)
//                totalAcumulador     producto  total sumando lo q pedimos                        valor de inciio
products.reduce((totalProductValues, product) => totalProductValues + product.price * product.stock, 0)


// para casa el sort() --> ordenar MUTA(cambia el array original)
let copia = [...products].sort(); // para no mutar la original por ejemplo

// toSorted() --> no muta y ordena ascendente
// slice() --> bueno splice() --> malo
