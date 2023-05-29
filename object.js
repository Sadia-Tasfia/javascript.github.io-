/*
Topic: 
1. find the cheapest value
2. find the largest value
3. find the total amount from object using for loop
3. object
4. finding properties using 2 method(dot , bracket notation)
5. finding last & middle element by index
6. Changing the array value or muted
*/ 


const arr = [
  { names: "walton", price: 13500, camera: 10, storage: 16 },
  { names: "xiaomi r20", price: 22500, camera: 12, storage: 32 },
  { names: "oppo 201", price: 16000, camera: 14, storage: 16 },
  { names: "nokia", price: 9000, camera: 10, storage: 10 },
  { names: "htc", price: 21600, camera: 18, storage: 18 },
  { names: "iphone", price: 62000, camera: 20, storage: 20 },
];

// for (const phone of arr) {
//   if(phone.price <=10000) {
//     console.log(phone);
//   }
// }

// cheapest 
let cheapest = arr[0];
for(const phone of arr) {
  if(phone.price < cheapest.price) {
    cheapest =phone;
  }
}
console.log(cheapest);

// largest
let largest = arr[0];
for (const phone of arr) {
  if (phone.price > largest.price) {
    largest= phone;
  }
}
console.log(largest);





// object
const student = {
  firstName: "sadia",
  lastName: "sujana",
  age: 2023 - 1999,
  job: "programmer",
  friends: ["jhorna", "him", "proma", "sraboni", "dipika"],
  isGoodAtProgrammer: true,
}; // objects literal syntax

// console.log(student);

// finding properties using 2 method(dot , bracket notation)
// console.log(student.job);
// console.log(student.friends[1]);

// console.log(student["firstName"]);
// console.log(student["lastName"]);

// console.log(student["isGoodAt" + "Programmer"]);

// exercise
// const interest = prompt("what do u want to know");
// if (student[interest]){
//   console.log(student[interest]);
// } else {
//   console.log("invalid key ❌❌");
// }

// example 2
// const whatYouKnow = prompt("student information");
// const test= student[whatYouKnow] ? student[whatYouKnow] : 'Invalid element';

// console.log(test);

// example 3
// Sadia is a programmer  and she has 5 friends. Him is her best friend.
console.log(
  `${student.firstName} is a ${student.job} and she has ${student.friends.length} friends. ${student.friends[1]} is her best friend`
); 


//finding last & middle element by index
const value = new Array(12,45,2,67,28,97,83,'TASFIA',5,2,9,1,27,58,10,3,8,12,76,'lorem');
// console.log(value.length);
// console.log(value [value.length -13]);

// Changing the array value or muted
value[3]= 'hello world';
value[value.length -8] = "hello programmer";
value.unshift(29);
// console.log(value);

