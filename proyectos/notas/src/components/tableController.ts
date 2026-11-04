import type { Student } from "../types/student";

export function createTable(alumnos: Student[], cssArray: string[]): HTMLTableElement {
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

import { students } from "../services/students";

export function searchStudent(name: string, cssArray: string[]): HTMLTableElement {

  const filter = students.filter(s =>
    s.name.includes(name)
  );

  return createTable(filter, cssArray);
}
