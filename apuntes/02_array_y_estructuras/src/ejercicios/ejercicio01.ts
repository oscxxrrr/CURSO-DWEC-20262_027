// Enunciado: Ejercicio de uso de arrays y tipado
// Autor: Óscar Martinez Cabrera
// Investigación: Fuentes consultadas
//

// como tipabamos un array

const activos: boolean[] = [true, false, true, true];
const nombres: string[] = ["Oscar", "Maria", "Juan", "Marc"];

// nueva forma:

const edades: Array<number> = [12, 22, 18];

const precios = [65, 34, 23];
console.log(typeof precios);


// arrays con mas de un tipo
const valores: (srting | number)[] = ["Ana", 25, "Luis", 27];


// como pero para empezar mejor no
const persona: [string, number] = ["Ana", 45];


// leemos elementos de un array
console.log(nombres[0]); // <-- "pepe"
nombres[0] = "Don Pepe";

// insertar y eliminar en ultimo lugar y al comienzo del array
// el metodo push modifica el contenido (mutar) algo prohibido en React.
nombres.push("Miguel"); // se añade al final de nomrbes
// eliminar ultimo elemento de un array
console.log(nombres.pop()); // ademas devuelve el nuevo array modificado.
// añadir al comienzo del array
nombres.unshift("Adrian"); // añade al principio del array y devuelve la longitud del array
// eliminar primero del array
nombres.shift(); // borra el primero y devuelve el array



// metodos que mutan y que no mutan:
// push() --> muta
// pop() --> muta
// shift() --> muta
// unshift() --> muta
// sort() --> muta
// reverse() --> muta
// splice() --> muta
//

// metodo slice() <-- devuelve una parte del array sin mutar el array *****
//                          0  1  2  3  4 
const numeros: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numeros.slice(1, 4); // [20,30,40] --> coge la primera posicion (1) pero no coge la ultima posicion (4)
// sin mutar el array


// metodo splice() <-- eliminar, añadir o sustituir elementos del array
numeros.splice(1, 2); // <-- devuelve una array con lo q borra 


// copiar arrays Spread Operator ********************************

const num: number[] = [1, 2, 3];
const copia: number[] = [...num] // <-- tiene una copia con [1,2,3]
const copia2 = [0, 2, ...num, 6, ...copia] // <-- copia del array añadiendo un 0,2 al principio, otra copia, y un 6 al final

// recorrer un array:
// for(let i = 0; i<num.length; i++)


// for of cuando solo queremos el valor
//

for (const precio of precios) {
  console.log(precio)
}

// foreach() se usa mucho en React
// se usara el forEach cada vez q queramos hacer algo con cada uno de los elementos de un array 
// se parece al map pero el map es mas potente en muchos otros casos
precios.forEach((precio: number, indice: number) => {
  console.log(`Precio al cuadrado: ${precio ** 2} - Posicion: ${indice}`)
})

// metodos que usan funciones CallBack
//
// forEach(), map(), filter(), find() <-- *** muy importantes para react
// un callback es una funcion por tanto estos metodos reciben como parametro una funcion


