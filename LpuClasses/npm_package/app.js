const q = require('lodash');

const a = require('./add');
let p=a.add(2,4);
console.log(p);

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = q.map(numbers, n=>n*2);

console.log('original numbers: ',numbers);
console.log('Doubled numbers: ',doubleNumbers);

