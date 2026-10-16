// Enunciado: Set A1
// Autor: Oscar Martinez
// Investigación: Fuentes consultadas

/**
 *  Tags no repetidos
 * @param posts : string[][] de los tags
 * @returns string[] tags no repetidos
 */
export function uniqueTags(posts: string[][]): string[] {
  return [... new Set<string>(posts.flat())];
}

// Enunciado: Set A2
// Autor: Oscar Martinez
// Investigación: Fuentes consultadas

/**
 *  Funcion del primer repetido
 * @param votes : string[] los votos con su supuesto dni
 * @returns string or undefined string--> repetido undefinded --> no repetidos
 */
export function firstRepeated(votes: string[]): string | undefined {
  const votosLimpios = new Set<string>();
  for (const vote of votes) {
    if (votosLimpios.has(vote)) {
      return `DNI repetido: ${vote}`;
    }
    votosLimpios.add(vote);
  }
  return undefined;
}

// Enunciado: Set A3
// Autor: Oscar Martinez
// Investigación: Fuentes consultadas

export function inBoth(a: string[], b: string[]): string[] {
  const listaB = new Set<string>(b);
  let final: string[] = [];

  for (const song of a) {
    const songBoth = listaB.has(song) ? listaB : listaB.add(song);
    if (songBoth) {
      final = [...final, song];
    }
  }
  return final;
}




