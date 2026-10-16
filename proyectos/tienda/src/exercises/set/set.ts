// import { products } from "../../data/products";
//
// products.map(p => p.category); // mostrara categorias pero habra repetidas
//
// // solucion: usar un Set para tener valores unicos
// // no usa posiciones
//
// // como se declara: new Set<tipo>();
// const tags = new Set<strirng>();
// tags.add('ciencia ficcion');
// tags.add('terro');
// tags.add('terro');
// tags.add('terro');
// tags.add('terro');
// tags.add('terro');
//
// // como se ve el set
// tags.size; // <-- size 2: da igual q haya terror repetido
//
// // como se si un elemento esta dentro de un set
// tags.has('terror') // <-- true
//
// // como se borra
// tags.delete('terror') // <-- true (lo borra y dice si ha podido)
// tags.delete('tttteerrrrooorrr') // <-- no lo borra y devuelve false
//
//
//
// const categoriasNoRepetidas = new Set<string>(...products.map(p => p.category)); // products.map(p => p.category); --> ... quitamos que el map devuelve un array
//
//
// // ejercicio: crear una funcion que le pase como parametro un array de numeros y devuelva true/false si hay repetidos o no.
// const num1 = [1, 2, 3, 4, 5, 4, 5, 4, 3, 4, 5, 4];
// const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// export function hasDuplicates(ids: number[]): boolean {
//
//   return new Set(ids).size !== ids.length;
//
// }
//
// console.log(hasDuplicates(num1)); // <-- true porque hay repetidos
// console.log(hasDuplicates(num2)); // <-- false porque no hay repetidos
//
//
//
// // ej: ejemplifiquemos con un set una lista de peliculas ya vistas
// // crea una funcion firtView() que reciba un array de ids de peliculas ya vistas y que devuelva un number o undifinded. 
// // con la primera pelicula repetida o que he visto +1 vez. 
//
// export function firstView(ids: number[]): number | undefined {
//   const see = new Set<number>();
//
//   for (const id for ids) {
//
//     see.has(id) ? ids : see.add(id);
//   }
//
//   return undefined;
// }
//
// firstView([4, 3, 2, 6, 2, 7]) // <-- 2
// firstView([4, 3, 2, 6, 2, 7, 4]) // <-- 4
