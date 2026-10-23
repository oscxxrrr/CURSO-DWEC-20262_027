// esta bien pero hay otra mejor
// const averageText = document.getElementById("average");

import { students } from "./services/students";
import { average, isPassed } from "./utils/grades";

const averageText = document.querySelector("#average"); // buscar
const listU = document.querySelector("#student-list");

if (!(averageText instanceof HTMLParagraphElement)) { // comprobar
  throw new Error("Falta el parrafo con ide average");
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("Falta el list con ide student-list");
}

// acciones

// buscar alumno <-- input busqueda
const inputSearch = document.createElement("input");
// importantes
inputSearch.type = "text";
//estilos
inputSearch.placeholder = "Escribe nombre para buscar";
inputSearch.style.backgroundColor = 'gray';
inputSearch.style.color = "white";

// boton enviar busqueda
const btnSearch = document.createElement("button");
btnSearch.textContent = "Buscar";
btnSearch.onclick =



  // parrafo
  averageText.textContent = `Media: ${average(students).toFixed(2)}` //modifica <p id="">AQUI<p>


// lista
for (const student of students) {
  const item = document.createElement("li"); // creacion li
  item.textContent = `Estudiante: ${student.name} - Nota: ${student.grade}`; // añadiendo contenido li
  item.style.color = isPassed(student) ? "green" : "red"; // 5 o mas verde, 4 o menos rojo
  listU.appendChild(item); // añadimos LI al UL sera un hijo
}

averageText.append(inputSearch);
averageText.append(btnSearch);




