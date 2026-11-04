import { createTextSpan, getElement } from "./components/dom";
import { createInput } from "./components/inputController";
import { createTable, searchStudent } from "./components/tableController";
import { students } from "./services/students";

// datos


// creacion
const app = getElement("#products", HTMLDivElement);
const t1 = createTextSpan("Usuarios: ", ["t1"]);
const input = createInput("Nombre usuario... ", ["in1"]);
let table = createTable(students, ["table1"]);

// estilo t1
t1.style.fontSize = "24px";
t1.style.fontWeight = "bold";


// manejo input

// search
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const newTable = searchStudent(input.value, ["table1"]);
    table.replaceWith(newTable);
    table = newTable; // Actualiza la tabla actual
  }
});

const br = document.createElement("br");

app.append(t1, br, input, table);
