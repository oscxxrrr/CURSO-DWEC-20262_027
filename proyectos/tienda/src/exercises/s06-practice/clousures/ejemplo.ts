const greaterThan10 = (n: number): boolean => n >= 10;
const greaterThan20 = (n: number): boolean => n >= 20;

// fabriquemos una funcion que pueda generar a otras 


// 1. tipemos una funcion : type nombre_funcion = (parametros tipados) => tipo_valor_devuelvo
type NumberCheck = (n: number) => boolean;

function greaterThan(limit: number): NumberCheck {
  function check(n: number): boolean {
    return n >= limit;
  }

  return check;

}

const greaterThan_10 = greaterThan(10); // creando variable asignando una funcion --> greaterthan(limit -> 20)
const greaterThan_20 = greaterThan(20); // |
const greaterThan_30 = greaterThan(30);//  |
//  .......................................|
console.log(greaterThan_20(40)); //    true --> greaterThan_20(tiene de limite 20) y a check se le pone (n->40) true porque es mayor.



const nums = [-2, 3, 4, -5, 6];

const greaterThan_3 = greaterThan(3);
console.log(nums.filter(greaterThan_3)); // [3, 4, 6]
// sin parentesis para q no se ejecute q el filter solo compruebe.




// crear una funcion fabrica que le pase 2 valores y genere verdadero o falso si el valor pedido esta entre esos dos valores sin incluir

function createBetween(min: number, max: number): NumberCheck {
  function check(n: number): boolean {
    return n > min && n < max;
  }
  return check;

  // modo pro:
  // return (n: number) : boolean => n > min && n < max;
}

const between10and20 = createBetween(10, 20);
console.log(between10and20(5)); // false


