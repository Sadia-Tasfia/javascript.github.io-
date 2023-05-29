/*
Topic:
1.factorial using for loop
2. factorial using function
3. factorial using while loop

 */ 
let factorial = 1;
for ( let i= 1; i <=4; i++) {
  console.log(i);
  factorial= factorial *i;
}
console.log(factorial);


// factorial using function
function getFactorial (number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    console.log(i);
    factorial = factorial * i;
  }
  return factorial;
}

let factorialNumber = getFactorial(6);
console.log("The first factorial number is", factorialNumber);

let factorialNumber2 = getFactorial(8);
console.log("The second factorial number is", factorialNumber2);


// factorial using while loop
function getToFactorial(num) {
  let factorial = 1;
  let i= 1;
  while (i <= num) {
    factorial = factorial * i;
    i++ ;
  }
  return factorial;
}
let factorialNumber3 = getToFactorial(4);
console.log("The third factorial number is", factorialNumber3);

// example-2
function getToFactorial2(num2) {
  let factorial = 1;
  let i = num2;
  while (i >= 1) {
    console.log(i);
    factorial = factorial * i;
    i--;
  }
  return factorial;
}
let factorialNumber4 = getToFactorial2(4);
console.log("The 4th factorial number is", factorialNumber4);