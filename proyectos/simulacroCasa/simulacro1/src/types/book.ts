// PASO: 1 -> tipos
// ¿Como va a ser mi libro?

export interface Book {
  readonly id: number;
  title: string;
  author: string;
  year: number;
  cover: string;
  favorite: boolean;
}

export interface AppState {
  books: readonly Book[]; // la lista completa sin filtrar todos los libros
  search: string; // lo que el usuario ha escrito en el buscador
}
