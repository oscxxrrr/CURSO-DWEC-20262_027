// funcion fabrica que genere saludo


function makeGreeter(greeting: string): (name: string) => string {
  return (name) => `${greeting}, ${name}`;
}

const morning = makeGreeter("Buenos dias");
const evening = makeGreeter("Buenas noches");

console.log(morning("oscar"));
console.log(evening("adrian"));
console.log(['Maria', 'Pablo', 'Oscar'].map(morning));



// converson de diferentes unidades
function makeConverter(factor: number): (value: number) => number {
  return (value) => value * factor;
}

const kmToMiles = makeConverter(0.61); //--> asignamos el factor
const euroToDolars = makeConverter(1.08); // --> asignamos el factor

console.log(kmToMiles(10).toFixed(2)); // --> 6.21 --> ejecutamos la funcion kmToMiles con un value
console.log(euroToDolars(100).toFixed(2)); // --> 108 --> ejecutamos la funcion euroToDolars con un value



// crear un marcador de cualquier competicion.



function makeScoreBoard(): { scoreHome: () => void; scoreAway: () => void; result: () => string; } {
  // declaramos variables que acumulan las puntuaciones del home y del away
  let home = 0;
  let away = 0;

  return {
    scoreHome: () => { home += 1 },
    scoreAway: () => { away + 1 },
    result: () => `${home} - ${away}`
  }
}

const granadaToMalaga = makeScoreBoard();

granadaToMalaga.scoreHome();
granadaToMalaga.scoreHome();
granadaToMalaga.scoreAway();

console.log(granadaToMalaga.result());
