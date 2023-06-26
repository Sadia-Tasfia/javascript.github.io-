/*
Topic:
1. Recursion
2. Recursion sum in reverse way
3. Factorial recursion using for loop

note:func er vitor theke abro call kora ..must condition dite hobe r incre ba decrement dite hobe
*/ 

function numbers(i) {
  if (i > 5) {
    return;
  }
  // console.log(i);
  numbers(i + 1); //increment by 1 ,1 
}
numbers(1); // func call

// Sum

// let sum = 0;
// for(let i=5; i>=1; i--) {
//   sum = sum +i;
//   console.log(sum, i);
// }
// console.log(sum)

function sum(i) {
  console.log(i);
  if (i == 1) {
    // condition
    return 1;
  }
  return i + sum(--i); // decrement
}
// console.log(sum(5)); //  initialize i=5

// i + sum(--i)
/* 5 + sum(--5)
  5 + sum(4)
  5 + 4 + sum(3)
  5 + 4 + 3 + sum(2)
  5 + 4 + 3 + 2 + sum(1)
  5 + 4 + 3 + 2 + 1
  15 
*/

//  Factorial recursion  

/*
let factorial1 = 1;
for (let i = 5; i >= 1; i--) {
  console.log(i);
  factorial1 = factorial1 * i;
}
console.log(factorial1);

*/ 

function factorial(i) {
  
  console.log(i)
  if (i == 1) {
    //condition
    return 1;
  }
  return i * factorial(--i); //decrement
}
console.log(factorial(5)); //initialize



