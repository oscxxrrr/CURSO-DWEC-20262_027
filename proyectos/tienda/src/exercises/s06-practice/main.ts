// src/main.ts
// A1
import { firstRepeated, inBoth, uniqueTags } from '../s06-practice/a-set/index';
console.log(uniqueTags([['ts', 'js'], ['js', 'css'], ['ts']]));

// A2
console.log(firstRepeated(['11A', '22B', '33C', '22B', '11A'])); // '22B'
console.log(firstRepeated(['11A'])); // undefined

//A3
console.log(inBoth(['Flowers', 'Despecha', 'Flowers', 'Anti-Hero'], ['Anti-Hero', 'Flowers', 'Tusa']));
// ['Flowers', 'Anti-Hero']
