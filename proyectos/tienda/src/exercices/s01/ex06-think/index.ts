import type { Product } from "../../../types/product";


export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

// Pregunta 1 ¿Que devuelve allInStock([])?
// Resultado: ...
// Pregunta 2 ¿Es una respuesta razonable para una tienda sin productos? ¿Porque?
// Respuesta: ...
// Pregunta 3 ¿Como cambiarias la funcion para que una tienda vacia devuelvafalse?
// Respuesta (escribe el codigo en una linea):  
