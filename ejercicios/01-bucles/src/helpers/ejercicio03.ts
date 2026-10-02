// Ejercicio uso de filter map y otros en typeScript
//
// Crear programa que: 
// - muestre el nombre de todos los alumnos 
// - calcule la nota media de cada alumno 
// - mostrar alumno con nota media mas alta
// - calcular la media global de la clase
//
// {nombre: "Luis", edad: 22, notas: [5,4,6,3]}
// {nombre: "Sara", edad: 22, notas: [6,3,2,9]}
// {nombre: "Oscar", edad: 22, notas: [6,7,3,10]}
// {nombre: "Pepe", edad: 22, notas: [7,7,6,3]}
// {nombre: "Mario", edad: 22, notas: [2,8,10,7]}

type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];
};

export function ejercicio03() {
  const alumnado: Alumno[] = [
    { nombre: "Luis", edad: 22, notas: [3, 4, 5, 3] },
    { nombre: "Adrian", edad: 20, notas: [7, 8, 6, 9] },
    { nombre: "Oscar", edad: 19, notas: [5, 7, 8, 6] },
    { nombre: "Nayara", edad: 20, notas: [6, 8, 7, 5] }
  ];

  // Mostrar el nombre de todos los alumnos
  console.log("--- 1. Nombres de los alumnos ---");
  const nombres = alumnado.map((alumno) => alumno.nombre);
  console.log(nombres);

  // Calcular la nota media de cada alumno
  console.log("n--- 2. Nota media de cada alumno ---");
  alumnado.forEach((alumno) => {
    let sumNotas = 0;
    // Recorremos cada nota y la vamos sumando
    for(const nota of alumno.notas){
      sumNotas += nota;
    }

    const media = sumNotas / alumno.notas.length;
    console.log(`${alumno.nombre} : ${media}`);
  });

  // Mostrar el alumno con la nota media mas alta
  console.log("--- 3. Alumno con la nota media mas alta ---");
  let mejorAlumno = alumnado[0];
  let mejorMedia = mejorAlumno.notas.reduce((a, b) => a + b, 0) / mejorAlumno.notas.length;

  alumnado.forEach((alumno) => {
    const mediaActual = alumno.notas.reduce((a, b) => a + b, 0) / alumno.notas.length;
    if (mediaActual > mejorMedia) {
      mejorMedia = mediaActual;
      mejorAlumno = alumno;
    }
  });
  console.log(`El alumno con mayor media es ${mejorAlumno.nombre} con un ${mejorMedia}`);

  // Calcular la media global de la clase
  console.log("--- 4. Media global de la clase ---");
  const todasLasNotas = alumnado.flatMap((alumno) => alumno.notas);
  const sumaTotal = todasLasNotas.reduce((acc, nota) => acc + nota, 0);
  const mediaGlobal = sumaTotal / todasLasNotas.length;
  console.log(`La media global de la clase es: ${mediaGlobal}`);
}
