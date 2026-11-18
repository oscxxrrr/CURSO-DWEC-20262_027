import type { Book } from "../types/book";

// cargamos y guardamos todos los libros en el local storage
const VITE_STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY ?? "biblioteca-books";

export function loadBooks(): Book[] | null {
  const text = localStorage.getItem(VITE_STORAGE_KEY);
  if (text === null) return null;
  try {
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}


export function saveBooks(books: readonly Book[]): boolean {
  try {
    localStorage.setItem(VITE_STORAGE_KEY, JSON.stringify(books));
    return true;
  } catch (error) {
    console.log("Error guardando la data --> ", error);
    return false;
  }
}
