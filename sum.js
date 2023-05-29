/* 
Topic :
Sum of all numbers using array and function
*/ 

// example-1
const number = [20, 50, 30, 20, 30];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log("The sum of the number", sum);

// example-2
function arrayTotal (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const result = arrayTotal([20, 30, 80, 10, 40, 20]); ;
console.log("The sum of the array", result);