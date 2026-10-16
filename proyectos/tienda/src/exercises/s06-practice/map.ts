const phones = new Map<string, string>();

phones.set("Ana", "667432234");
phones.set("Pedro", "688999000");
phones.set("Maria", "600066655");
phones.set("Marco", "611222333");

console.log(phones.size); // devuelve --> 4
console.log(phones.get("Ana")); // devuelve el valor de la key pasada --> "667432234"
console.log(phones.get("Oscar")); // undefined (cuidado primero validar la key existe);

//ejercicio: grades de una clase
//

export const grades = new Map<string, number>([
  ["Ana", 9],
  ["Mario", 5],
  ["Andres", 3],
]);

export function addGrade(name: string, grade: number): Map<string, number> | string {
  return grades.has(name) ? "usuario existente, error" : grades.set(name, grade);
}

// funcion para obtener la nota de un alumno siempre y cuando exista
//
export function gradeOf(name: string): string {
  const grade = grades.get(name);
  return grade ? `Nota: ${grade}` : "no existe";
}

console.log(gradeOf("pepe")); // Nota: 9
console.log(gradeOf("Ana")); // alumno no existe


// ------------- contabilizar los votos de un alumno --------------
export function countVotes(votes: string[]): Map<String, number> {
  const count = new Map<string, number>();
  for (const vote of votes) {
    const previus = count.get(vote) ?? 0;
    // si es false devuelve lo de la derecha de los : y si no es false ps lo devuelve

    // añadimos vote
    count.set(vote, previus + 1);
  }
  return count;
}


// agrupar alumnos por clase: tengo lista de alumnos y cada uno de un grupo 2DWEC-A 2DWEC-B
// contruir namesGroup que devuelva cada grupo con sus alumnos respectivos. 
//
interface Student {
  name: string;
  group: string;
}

const alumnos: Student[] = [
  { name: "Ana", group: "2A" },
  { name: "Pedro", group: "2B" },
  { name: "Oscar", group: "2B" },
  { name: "Paula", group: "2B" },
  { name: "Adrian", group: "2A" },
]


export function namesGroup(students: Student[]): Map<string, string[]> {
  const group = new Map<string, string[]>();
  for (const student of students) {
    const current = group.get(student.group) ?? [];
    // si la clase no esta creada crea un array vacio, si esta creada devuelve la clase

    group.set(student.group, [...current, student.name]);

  }
  return group;
}


for (const [group, name] of namesGroup(alumnos)) {
  console.log(`Estudiante: ${group} | Grupo: ${name}`)
}

