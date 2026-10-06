import type { Product } from "../../../types/product";


/**
 *  Funcion que devuelve una lista de productos cuya categoria es igual a la del parametro 
 * @param list Descripción
 * @returns Product[]
 */
export function byCategory(list: Product[], category: Category): Product[] {
  return list.filter((prod) => prod.category === category);
}

// Pregunta: Que devuelve byCategory([], 'audio')?
// Resultado: Devuelve un array vacio.
// ¿Da error o devuelve algo con sentido? ¿Por que?: No porque filter devuelve si o si una array vacia.  
