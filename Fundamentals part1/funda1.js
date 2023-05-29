/*

// PART 3 STARTS HERE
//TOPICS: 1)truthy and falsy
2)equality operators
3)nested condition
4)AND ,OR operator
5)Leap year testing
6)switch case statement
7) Statement and expression
8) ternary operator
9) how to find today date
 */

// truthy and falsy values
// falsy values: 0," ", undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Truthy
console.log(Boolean(1));
console.log(Boolean("sadia"));
console.log(Boolean(" "));
console.log(Boolean({ }));

let money = 0;
if (money) {
  console.log("I have money");
} else {
  console.log("I have no money");
}

// equality operators
//  = ; assign
//  == or ===; equality
//  != or !==; not equal
//  

const age = "21";
if (age == 21) {
  //js does type coercion,not strict
  console.log("You are an adult");
} else {
  console.log("You are too young");
}

if (age === 21) {
  //js doesnot type coercion, strict and must be matched type & value
  console.log("You are an adult");
} else {
  console.log("You are too  young");
}

const favouriteNumber = Number(prompt("What's your favourite number? "));
console.log(favouriteNumber);
  
// nested conditions
const testAge = 18;
const testNID = true;
const testBirthReg = false;
const testPassport = true;

if (testAge === 18) {
  if (testNID) {
    if (testPassport) {
      console.log(`Your age: ${testAge} & applicable for this job 💯`);
    } else {
      console.log(`Something is missing but ur age is applicable`);
    }
  } 
} else if (testAge !== 18){
  if (testBirthReg) {
    console.log(`Your age ${testAge},not applicable.`);
  } else {
    console.log(`Absent`);
  }
} 

// and, or( &&, ||)
const saveMoney = 150000;
const ownHouse = true;
const ownBusiness = false;

if ((ownHouse && saveMoney>= 200000) || ownBusiness) {
  console.log(`You don't want extra money`);
} else {
  console.log(`You want money 💰💰`);
}

const pocketMoney = 500;
const timeLeft = 5;
if (pocketMoney >=200 || timeLeft<=3) {
  console.log(`I'll eat burger`);
} else {
  console.log(`I have not enough money`);
}

// Leap year testing
/* year % 400 === 0 
year %4 ==0 && year %100 !==0   */

let year = 2024;
if (year % 400 ===0 || (year % 4==0 && year %100 !==0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

let year1 ="2022 ";

if (typeof (year1) === "number") {
  if (year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)) {
    console.log(`${year1} is a leap year`);
  } else {
    console.log(`${year1} is not a leap year`);
  }
} else {
  console.log("Enter a valid year");
}

// Switch case statements
const day = "asdb";
switch (day) {
  case "saturday":
    console.log("no class");
    break;
  case "sunday":
  case "monday":
    console.log("Class ase");
    break;
  case "tuesday":
    console.log("no class");
    break;
  case "wednesday":
    console.log("Class ase");
    break;
  case "thursday":
    console.log("no class");
    break;
  case "friday":
    console.log("class ase");
    break;
  default:
    console.log("Not a valid day");
}

// Statement and expression
// expression can produce values
// statement can't produce values, only manipulation expression 
const text = "this is a big number";
const text2 ="this is not a big number";

if (23 <= 30) {
  console.log(text);
} else {
  console.log(text2);
}

// ternary operator
let myNumber = 220;
if (myNumber >= 145) console.log("My number is big");
else console.log("My number is not big");

// example 1
myNumber <320
? console.log("Number is not big") : console.log("Number is  big");

// example 2
myNumber ===100 ? (myNumber +=50) :(myNumber -=20);
console.log(myNumber)

// example 3
const a=30;
const b=10;
let c;
a <= b ? (c = a + b) : (c =b-a);
console.log(c);

// how to find today date
var today = new Date()
console.log(today);
// PART 3 ENDS HERE

