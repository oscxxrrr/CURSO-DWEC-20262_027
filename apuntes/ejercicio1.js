let nombre = "Oscar";
let apellidos = "MC";
let aniosTraabajo = 25;

console.log(`Hola a todos, me llamo ${nombre}, ${apellidos}, llevo ${aniosTraabajo} años trabajados`);

console.log(typeof(aniosTraabajo));
console.log(typeof(Number(apellidos)));

// == es igual y === tipo y valor es igual
// '5' == 5 --> true
// '5' === 5 --> false
//
// ternarias: evaluacion_expresion ? verdadero : falso
//

const edad = 23;
const hora = 12;
const minuto = 62;

edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
hora > 0 && hora < 24 ? console.log("Hora valida") : console.log("Hora incorrecta");
minuto > 0 && minuto <60 ? console.log("Minuto valido") : console.log("Minuto incorrecto");
