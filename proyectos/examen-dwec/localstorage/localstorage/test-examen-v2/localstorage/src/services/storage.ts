// =====================================================================
// GUARDAR Y CARGAR EN localStorage
// ---------------------------------------------------------------------
// localStorage solo guarda TEXTO:
//   guardar -> JSON.stringify (objeto -> texto)
//   cargar  -> JSON.parse     (texto -> objeto)
// Lo que viene de localStorage NO es de fiar: el usuario puede borrarlo
// o cambiarlo desde las DevTools. Por eso se VALIDA antes de usarlo.
// =====================================================================

import type { Product } from "../types/product";

const KEY = "test-examen-v2:products"; // nombre del "cajón" donde guardamos

export function saveProducts(products: readonly Product[]): void {
  localStorage.setItem(KEY, JSON.stringify(products));
}

// Devuelve los productos guardados, o null si no hay nada válido
export function loadProducts(): Product[] | null {
  const text = localStorage.getItem(KEY);
  if (text === null) return null; // primera vez: no hay nada guardado

  try {
    const data: unknown = JSON.parse(text); // unknown: aún no sabemos qué es
    if (Array.isArray(data) && data.every(isProduct)) return data;
  } catch {
    // texto que no es JSON (alguien lo ha estropeado): lo ignoramos
  }
  return null;
}

// Comprobación en ejecución. `as Product` NO comprobaría nada.
function isProduct(x: unknown): x is Product {
  if (typeof x !== "object" || x === null) return false;
  const p = x as Record<string, unknown>; // solo para poder leer sus campos
  return (
    typeof p.id === "number" &&
    typeof p.name === "string" &&
    typeof p.price === "number" &&
    typeof p.favorite === "boolean"
  );
}
