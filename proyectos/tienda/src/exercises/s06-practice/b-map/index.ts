// Enunciado: Map B1
// Autor: Oscar Martinez
// Investigacion: Fuentes consultadas
/**
 *  Total de goles por jugador
 * @param goals : string[] array de jugadores
 * @returns Map<string, number> jugador -> golesTotal
 */
export function goalsByPlayer(goals: string[]): Map<string, number> {
  const players = new Map<string, number>();
  for (const player of goals) {
    players.set(player, (players.get(player) ?? 0) + 1);
    //key      si existe devuelve el valor sino 0 -> y se suma 1 --> es decir si no existia pone 1 y si existe valor X+1
  }

  return players;
}



// Enunciado: Map B2
// Autor: Oscar Martinez
// Investigacion: Fuentes consultadas
/**
 *  Mostrar el jugador con mas goles
 * @param count: ReadonlyMap<string, number> -> map que solo sera leido de los jugadores con sus goles
 * @returns string | undefined --> string: nombre jugador, undefined repetidos o error programa controlado.
 */
export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let jugador: string | undefined = undefined;
  let contGoles: number = 0;
  for (const [player, goals] of count) {
    if (goals > contGoles) {
      jugador = player;
      contGoles = goals;
    }
  }
  return jugador;
}



// Enunciado: Map B3
// Autor: Oscar Martinez Cabrera
// Investigacion: Fuentes consultadas

interface Book {
  title: string;
  author: string;
}

/**
 *  Libreria, con autor y todos sus libros
 * @param books: Book[] array de tipo book
 * @returns Map<string,string[]> --> author y array de sus titulos
 */
export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const library = new Map<string, string[]>();
  for (const book of books) {
    library.set(book.author, [...(library.get(book.author) ?? []), book.title]);
    //          key          copiamos el array entero, get del autor si no existe a¤adimos un array vacio y el titulo del libro
  }

  return library;
}

// Enunciado: Map B4 - reto
// Autor: Oscar Martinez Cabrera
// Investigacion: Fuentes consultadas
/**
 *  Devuelve la capital del pais
 * @param capitals: ReadonlyMap<string, string> -->  pais, capital
 * @param country: string --> pais que quieres saber su caiptal
 * @returns string mensaje de la capital o si no se ha encontrado
 */
export function capitalOf(capitals: ReadonlyMap<string, string>, country: string): string {
  return capitals.has(country) ? `La capital de ${country} es ${capitals.get(country)}` : `No conozco ${country}`;
}
