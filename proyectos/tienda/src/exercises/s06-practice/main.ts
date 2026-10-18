// src/main.ts
// A1
import { firstRepeated, inBoth, uniqueTags } from '../s06-practice/a-set/index';
import { capitalOf, goalsByPlayer, titlesByAuthor, topScorer } from './b-map';
console.log(uniqueTags([['ts', 'js'], ['js', 'css'], ['ts']]));

// A2
console.log(firstRepeated(['11A', '22B', '33C', '22B', '11A'])); // '22B'
console.log(firstRepeated(['11A'])); // undefined

//A3
console.log(inBoth(['Flowers', 'Despecha', 'Flowers', 'Anti-Hero'], ['Anti-Hero', 'Flowers', 'Tusa']));
// ['Flowers', 'Anti-Hero']

//B1
console.log(goalsByPlayer(['Lamine', 'Pedri', 'Lamine', 'Ferran', 'Lamine', 'Pedri']));
// Map { 'Lamine' => 3, 'Pedri' => 2, 'Ferran' => 1 }

//B2
console.log(topScorer(goalsByPlayer(['Lamine', 'Pedri', 'Lamine', 'Ferran', 'Lamine', 'Pedri']))); // 'Lamine'// 'Lamine'
console.log(topScorer(new Map())); // undefined
//B3
console.log(titlesByAuthor([
  { title: 'Cien aÃ±os de soledad', author: 'Garcia Marquez' },
  { title: 'Rayuela', author: 'Cortazar' },
  { title: 'El amor en los tiempos del colera', author: 'Garcia Marquez' },
]));
// Map { 'Garc¡a M rquez' => ['Cien a¤os de soledad', 'El amor en los tiempos del c¢lera'],
// 'Cort zar' => ['Rayuela'] }

//B4 - reto
const capitals = new Map([['Francia', 'Paris'], ['Italia', 'Roma']]);
console.log(capitalOf(capitals, 'Italia')); // 'La capital de Italia es Roma'
console.log(capitalOf(capitals, 'Narnia')); // 'No conozco Narnia'
