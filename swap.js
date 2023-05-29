/* 
Topic:
1. Swap
2. Destructuring
*/ 
let first = 21;
let second = 23;
console.log(first,second);

// let temp= first;
// first = second;
// second= temp;
// console.log(first, second);

// destructuring
[first, second] = [ second, first];
console.log(first, second);

