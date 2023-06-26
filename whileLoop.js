/*
Topic:
1. while loop
2. Even number
3. Odd number
*/ 

const newArr = ["hello", "world", 40, 50, "hi", "bye"];
let i = 0;
while (i < newArr.length) {
  console.log(newArr[i], i);
  i++;
}

// example-2
// let x = 4;
// while (x < 40) {
//   console.log(x, "hi js");
//   x += 5;
// }

// example-3
// var addingNumber = 1;

// while (addingNumber < 8) {
//   console.log('serial the number');
//   addingNumber ++;
//   console.log(addingNumber);
// }

// EVEN NUMBER
number=2;
while (number <10) {
  console.log(number,"This is an even number");
  number +=2;
}

// ODD NUMBER
number2 = 1;
while (number2 < 10) {
  console.log(number2, "This is an odd number");
  number2 +=2;
}