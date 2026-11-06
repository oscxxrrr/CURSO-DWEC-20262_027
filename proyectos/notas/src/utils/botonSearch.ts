import { createTableProducts, createTableStudents } from "../components/tableController";
import { products } from "../services/products";
import { students } from "../services/students"

function searchStudent(name: string, cssArray: string[]): HTMLTableElement {
  const filter = students.filter(s => s.name === name);
  return createTableStudents(filter, cssArray);
}

export function searchNameBtn(btn: HTMLButtonElement, table: HTMLTableElement, input: HTMLInputElement): HTMLTableElement {

  btn.onclick = () => {
    const name = input.value;

    const student = students.find((s) => s.name === name);
    if (!student) {
      alert("Usuario no encontrado");
      return;
    }

    const cssArray = Array.from(table.classList);
    const newTable = searchStudent(name, cssArray);
    table.replaceWith(newTable);
    table = newTable;
  };

  return table;
}


function searchProduct(name: string, cssArray: string[]): HTMLTableElement {
  const filter = products.filter(s =>
    s.name === name
  );
  return createTableProducts(filter, cssArray);
}

export function searchProductBtn(btn: HTMLButtonElement, table: HTMLTableElement, input: HTMLInputElement): HTMLTableElement {

  btn.onclick = () => {
    const name = input.value;

    const product = products.find((p) => p.name === name);
    if (!product) {
      alert("Producto no encontrado");
      return;
    }

    const cssArray = Array.from(table.classList);
    const newTable = searchProduct(name, cssArray);
    table.replaceWith(newTable);
    table = newTable;
  };

  return table;
}
