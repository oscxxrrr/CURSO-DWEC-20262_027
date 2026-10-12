import { products } from './data/products';
import { totalUnits } from './exercises/s02-homework/ex01-total-units';
import { cheapestAvailable } from './exercises/s02-homework/ex02-cheapest-available';
import { catalog } from './exercises/s02-homework/ex03-catalog';
import { summary } from './exercises/s02-homework/ex04-summary';

// Ejercicio 1
console.log('ej01', totalUnits(products), totalUnits([]));

// Ejercicio 2
const cheapest = cheapestAvailable(products);
if (cheapest !== undefined) {
  console.log('ej02', cheapest.name);
}
console.log('ej02', cheapestAvailable([]));

// Ejercicio 3
console.log('ej03', catalog(products));

// Ejercicio 4
console.log('ej04', summary(products));
console.log('ej04', summary([]));
