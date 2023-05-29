/* console.log("hello world");
console.log('hello javascript');
// variables
let name = "sadia";
let age = 20;
let temperature = 32;
let device ="laptop";

console.log(device);
console.log(age, temperature);

// variable naming convention (camel case)
let herName = "sadia";
let herMiddleName = "tasfia";
let $lastName = "sujana";
let captain_america = "sadril";
let YOUR_LAPTOP_PRICE =57000;
let PI = 3.1416;

console.log($lastName, PI);

Topic:
1.data type
2.math operation
3.assignment operators
4. comparison operator ( >, <, >=, <=)
5.template literals
6.conditionals or control structure
7.type conversion (manually) and coercion
8.variable

*/

/* data type: object or primitive 
primitive data types:
1.number(integer,floating)
2.string
3.boolean (true or false)
4.undefined
5.null
6.symbol
7.bigInt

value has type, not variable
*/

/*let movieRating = 8.8;
let movieName = "Nodorai";
let isMovieGood = true;
let isSheCute = false;
let isJavaScriptFun;

console.log(typeof isSheCute);
console.log(typeof movieRating);
console.log(typeof isJavaScriptFun);

// re-assign or muted
isJavaScriptFun = true;
console.log(typeof isJavaScriptFun);

let carSpeed = null;
console.log(typeof carSpeed);
// null is not an object,it's a bug

const birthYear = 2000; // declaring a variable using const keyword
birthYear = 1999; // re-assign is not possible in a const variable

// never use var
var masterName = "Mr. X";
masterName = "Mr. Y";

// never use like this
fatFriendName = "moti";
console.log(fatFriendName);
*/


// PART 2 STARTS HERE
// math operation
const currentYear = 2022;
const ageProma = currentYear - 1994;
const ageSara = currentYear - 1996;

console.log(ageProma, ageSara);
console.log(ageSara / 2);
console.log(ageSara ** 2);

const laptopBrand = "acer";
const model = "CORE i5";

console.log(laptopBrand + " " + model);

// example-2
var firstNumber = 0.2;
var secondNumber = 0.4;
var totalNumber = firstNumber + secondNumber;
console.log(totalNumber.toFixed(4));

// assignment operators
let number = 20 + 25;
number += '10';
// number++;
number--;
console.log(number);

// comparison operator ( >, <, >=, <=)
console.log(ageProma >= ageSara);
console.log(ageProma < ageSara);

// template literals
const nameOfTheStudent = "sadia tasfia";
const studentAge = 20;
const studentJob = "programmmer";
const bioStu = `My name is ${nameOfTheStudent}, ${studentAge} years old and Iam a ${studentJob}.`;

console.log(bioStu);
console.log(`Hello
Iam sadia and
Iam a programmer. 😍`);

// conditionals or control structure
const birthYear = 1989;
if(birthYear <= 1999){
  console.log("You are a 90's kid 🥰🥰");
} else {
  console.log("You are not a 90's kid 🥱😫🥱");
}

const marks = 85;

if (marks >= 80) {
  console.log("A+");
} else if(marks >=70) {
  console.log("A");
} else if(marks >=60) {
  console.log("A-");
} else if (marks >=50) {
  console.log("B");
} else if (marks >=40) {
  console.log("C");
} else if ( marks>=33) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// type conversion (manually) and coercion (automatically)
// Nan not a number,Nan type is a number
const inputYear ="1999"; // coercion
console.log(inputYear + 10); // coercion 199910
console.log(inputYear - 10); // coercion 1989
console.log("hi" + 20); // coercion hi20
console.log("hi" * 2); // coercion Nan
console.log(200 - "100"); // coercion 100
console.log("100" -200); // coercion -100
console.log("100" + 200); // coercion 100200
console.log("100" * 200); // coercion 20000
console.log( 200 * "100"); // coercion 20000 
console.log(200 / "100" ); // coercion 2
console.log("100" / 200); // coercion 0.5


const testNumber ="200";
console.log(testNumber, typeof testNumber); // type conversion
console.log(Number(testNumber)); // type conversion
console.log(Number("sadia")); // type conversion

const testNumber2 = 100;
const boolen = true;
console.log(String(testNumber2)); // type conversion
console.log(typeof String(boolen)); // type conversion
console.log(typeof NaN); // type conversion

// game
let a= "1" + 1; 
a -=1;
console.log(a);

let x= 2+ 2 -6 +"4";
x +=10;
console.log(x);

let y= "10" - "5" -"8" -4 + "4";
y -=10;
console.log(y); 

let b= 1+3+6 -"4" +"6" - 10;
b+="10";
b--;
console.log(b); 
// PART 2 ends here



// variable (important)

// console.log(number3);
// var number3 = 20 + 25;
// number3 += 10;

// console.log(number2);
// let number2 = 20 + 25;
// number2 += "10";
// number2--;


// const number4 = 20 + 25;
// number4 += "10";
// number4--;
// console.log(number4);

var name2 = "sadia" ;
{
  var name2 = "sujana";
  console.log(name2);
}
console.log(name2);

let name3 = "sadia";
{
  let name3 = "tasfia";
  console.log(name3);
}
console.log(name3);

var k = 303;
var k = "python";
console.log(k);

// let g = 405;
let g  = 'css';
console.log(g);


