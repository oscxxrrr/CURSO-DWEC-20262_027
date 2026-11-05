import type { Product } from "../types/product";
import type { Student } from "../types/student";

export function createTableStudents(alumnos: Student[], cssArray: string[]): HTMLTableElement {
  const table = document.createElement("table");
  table.classList.add(...cssArray);

  alumnos.forEach(a => {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdCurso = document.createElement("td");

    tdNombre.textContent = a.name;
    tdCurso.textContent = String(a.grade);

    tr.append(tdNombre, tdCurso);
    table.append(tr);
  });

  return table;
}

export function createTableProducts(productos: Product[], cssArray: string[]): HTMLTableElement {
  const table = document.createElement("table");
  table.classList.add(...cssArray);

  productos.forEach(p => {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdPrecio = document.createElement("td");
    const tdStock = document.createElement("td");
    const tdId = document.createElement("td");

    tdId.textContent = String(p.id);
    tdNombre.textContent = p.name;
    tdPrecio.textContent = String(p.price);
    tdStock.textContent = String(p.stock);


    tr.append(tdId, tdNombre, tdPrecio, tdStock);
    table.append(tr);
  });

  return table;
}


