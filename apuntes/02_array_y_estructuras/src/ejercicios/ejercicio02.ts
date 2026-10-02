// Enunciado: Ejercicio repaso de metodos de los arrays
// Autor: Óscar Martínez Cabrera
// Investigación: Fuentes consultadas


// --------------- 1.Declaracion de variables ----------------- 

const notas: number[] = [6, 8, 4, 9, 7];
//const notaAñadida = 9;





// --------------- 2. Creacion de funciones --------------------
//
// Funcion que muestre todas las notas
//


/**
 *  Funcion que muestra el valor de las notas pasadas como parametro
 * @param notes[] Array de Notas
 */

function showNotes(notes: number[]): void {
  // for (const note of notes) {
  //   console.log(" ", note);
  // }

  //notes.forEach((note:number) => console.log(" ", note));

  console.log([...notes]) // version mejorada --> [6, 8, 4, 9, 7]
}



//
// Funcion que calcule la media de las notas
//

/**
 *  Funcion que calcula la media de todas las notas
 * @param notes[] Array de Notas
 */
function calcularNotas(notes: number[]): void {
  let sum = 0;

  for (const note of notes) {
    sum += note;
  }

  console.log("La media es: ", sum / notes.length);
}

const calcularNotasV2 = (notes: number[]) => {
  let suma = 0;
  notes.forEach((note: number) => suma += note);
  console.log("La media es v2: ", suma / notes.length);
}

// Fucnion que muestre la mayor nota y la posicion de esa nota
//

// function notaMayor(notes: number[]): void {
//   notes.forEach((note: number, indice: number) => console.log(`Nota: ${note} - Posicion: ${indice}`))
// }

// Fucnion de calcule la mediana de las notas
//
//
// Funcion que devuelva un array con notas junto con la nota pasada como parametro
//
// function añadirNota(notes: number[], notaNueva: number) {
//   console.log([...notes, notaNueva]);
// }

// Funcion que elimina una nota, recibe el array de notas como segundo parametro 1 o -1, si es 1 elimina la primera posicion de la array
// y devuelve una copia. Si es -1 elimina la ultima posicion del array y devuelve una copia. No mutamos el array del parametro y me lo demostrais haciendo un clg del array del parametro
// para asegurar q no lo has mutado. 
//

function deleteGrade(notes: number[], t: (1 | -1)): void {
  const copyNotes = [...notes];
  if (t === 1) {
    copyNotes.shift();
  } else {
    copyNotes.pop();
  }
  console.log("CopyNotes: ", copyNotes);
  console.log(notes);
}




// ------------ funcion de ejecucion ------------
export function ejercicio02(): void {
  showNotes(notas);
  calcularNotas(notas);
  calcularNotasV2(notas);
} 
