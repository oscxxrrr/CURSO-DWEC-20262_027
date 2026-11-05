import { createTableProducts, createTableStudents } from "../components/tableController";
import { products } from "../services/products";
import { students } from "../services/students";

function searchStudent(name: string, cssArray: string[]): HTMLTableElement {
  const filter = students.filter(s => s.name.includes(name));
  return createTableStudents(filter, cssArray);
}

export function searchInputStudent(input: HTMLInputElement, table: HTMLTableElement): HTMLTableElement {
  input.addEventListener("input", () => {
    let valor = input.value;
    const cssArray = Array.from(table.classList);
    const newTable = searchStudent(valor, cssArray);
    table.replaceWith(newTable);
    table = newTable;
  });
  return table;
}



export function searchProduct(name: string, cssArray: string[]): HTMLTableElement {
  const filter = products.filter(p => p.name.includes(name));
  return createTableProducts(filter, cssArray);
}

export function searchInputProduct(input: HTMLInputElement, table: HTMLTableElement): HTMLTableElement {
  input.addEventListener("input", () => {
    let valor = input.value;
    const cssArray = Array.from(table.classList);
    const newTable = searchProduct(valor, cssArray);
    table.replaceWith(newTable);
    table = newTable;
  });
  return table;
}
