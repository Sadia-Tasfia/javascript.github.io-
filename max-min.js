/* 
Topic:
1. Find the maximum
2. Find the minimum
*/ 

// example-1
let firstNumber = 1290;
let secondNumber =1000;
let thirdNumber= 879;

let max =Math.max( firstNumber, secondNumber, thirdNumber);
let min = Math.min(firstNumber, secondNumber, thirdNumber);
console.log("the maximum number is", mix);
console.log("the minimum number is", min);

// example-2
function findMaxNumber(a,b,c) {
  if (a>b && a>c) {
    return `${a} is the largest number`;
  }
  else if (b>a && b>c) {
    return `${b} is the largest number`;
  } 
  else  {
    return `${c} is the largest number`;
  }
}

let largestNumber = findMaxNumber (1030,874,999);
console.log(largestNumber);