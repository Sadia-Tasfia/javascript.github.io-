"use strict"; 
/* TOPICS:
1.function declarations
2.function expression
3.arrow function
4.Function calling function (callback)
5.Brick calculation

*/
// const private =20;
// const interface =10;
// console.log(private);
// console.log(interface);

/* function declare's have 3 system
1.function declarations
2.function expression
3.arrow function
*/

// 1.function declarations
function joinTheClass() {
  console.log("Switch on the PC");
  console.log("Go to the google chrome");
  console.log("Then go to the facebook");
  console.log("Click the meet link");
  console.log("Join the class");
}
joinTheClass(); // call or run or invoke

// example 1
function addTwoNumber(num1, num2) {
  const sum =num1 + num2;
  return sum;
}
console.log(addTwoNumber(10 , 16)); 
console.log(addTwoNumber("sadia", "tasfia"));

// find odd number
function oddNumber(number) {
  if(number % 2 !==0) {
    return `${number} is an odd number.`;
  } else {
    return `${number} is an even number.`;
  }
}
const myNumber = oddNumber(22);
console.log(myNumber);

// example-2
function addThreeNumber(x,y,z) {
  const add =x+y+z;
  console.log(add);
}
addThreeNumber(20,10, -8);

// 2.function expression
const juiceFactory = function (apples, oranges) {
  const juices = (apples * oranges) / 2;
  return `${juices} Juice is ready using ${apples} apples and ${oranges} oranges 🧃🥤`;
};
console.log(juiceFactory(5,10));

// 3.arrow function
const pizzaMaker =(bread, cheese) => {
  const pizzas = (bread * cheese) / 2;
  return `${pizzas} inch pizza is ready for everyone 🧃🥤`;
};
console.log(juiceFactory(5, 5));

// example 1
const ageCalculator = (birthYear) => 2022-birthYear;
console.log(ageCalculator(1999));

// example 2
const doMath =(x,y) => {
  return x*y;
}
console.log(doMath(10,2));

// shortcut
const doMathPro = (x,y) => x+y ;
console.log(doMathPro("tasfia","sujana"))

// example 3
const ageCalculator2 = (birthYear) => 2022 - birthYear >=18 ? `You are adult` : `You are young`;
console.log(ageCalculator2(2001));

// example 4
const heroMaker =(age,skill,passed) => {
  if( age>=18 && skill || passed) {
    return "You can be a programmer";
  } else {
    return "You cannot be a programmer";
  }
}
console.log(heroMaker(22,true,false));

// shortcut
const heroMakerPro =(age,skill,passed) => age>=18 && skill || passed ? `you can be a programmer` : `you cannot be a programmer`;
console.log(heroMakerPro(22, false, false));   

// Noted: arrow function have some disadvantages..they can't declare everywhere.it's also called function declaration

// function calling function
function heightFn(myHeight) {
  const myNewHeight = myHeight + 3;
  return myNewHeight;
}
function weightFn (myWeight) {
  const myNewWeight = myWeight + 5;
  return myNewWeight;
}
function myBodyDetails(myHeight,myWeight){
  const NewHeight = heightFn(myHeight);
  const NewWeight = weightFn(myWeight);
  const details = `My height is ${NewHeight} and new weight is ${NewWeight}`;
  return details;
}
console.log(myBodyDetails(100,50));

// example 2
function ramFreqtest(ramFreq){
  return ramFreq >=2600 ? `DDR4` :`DDR3`;
}
function cpuTurbo(cpuClock){
  return cpuClock >=3.2 ? `1800rpm` : `1400rpm`;
}
function technicalTest (ramFreq,cpuClock){
  const dramState = ramFreqtest(ramFreq);
  const cpuState = cpuTurbo(cpuClock);
  return `My CPU configuration ${dramState} and ${cpuState}`;
} 
console.log(technicalTest(2650, 3.4));

// example 3
function fruitCutter(fruit){
  return fruit*2;
}
function juiceMaker(mangoes, oranges) {
  const mangoPieces = fruitCutter(mangoes);
  const orangePieces = fruitCutter(oranges);
  const juice = (mangoPieces + orangePieces) / 8;

  return `${juice} ltr. juice is ready using ${mangoPieces} and ${orangePieces}`;
}
console.log(juiceMaker(8,12));

// brick calculation
/* Question-
underground=50000
1st to 10th floor=10000 per floor
11th floor =12000
12th to 21st floor =10000 per floor
22th floor = 12000
73 floor=?
*/
function brickCalculation(totalfloors) {
  let totalBricks;
  const undergroundBricks =50000;
  let brickForAllFloors=totalfloors*10000;

  if(totalfloors >= 11){
    const extraFloors= Math.trunc(totalfloors/11);
    const extraBricks= extraFloors*2000;
    brickForAllFloors += extraBricks;
    totalBricks = undergroundBricks+brickForAllFloors;
  } else{
    totalBricks = undergroundBricks + brickForAllFloors;
  }
  return `the total bricks is ${totalBricks}`;
}
console.log(brickCalculation(73));