//  MILESTONE 4

let myName = "tasfia";
let myNumber = 100;
let myBoolean = true;

console.log(typeof myBoolean);
console.log(typeof myName);
console.log(typeof myNumber);

// 2,3
myNumber=+ 200;
console.log( myNumber);


let number =100+200;
let result = number %7;
console.log(result);

myNumber=+ 300;
console.log(myNumber);

// 4,5,6
let saraNumbers = 1712442277;
let promaNumbers = 1912442277;
let saraAge = 23;
let promaAge =23;

if( saraNumbers > promaNumbers && saraNumbers >= promaNumbers ) 
  console.log('sara number is bigger');

else if( saraNumbers< promaNumbers && saraNumbers <= promaNumbers) 
  console.log("prome number is bigger");

else
  console.log("no one is bigger");


// 7
let x=7;
while ( x<20) {
  console.log(`${x} is an odd number`, x);
  x += 2;
}

// 8 ,9 ,mutated
let array = [
  "hi", "hello" ,"bye", "whats up", [
    12+28 , 20- 8, 3**3 , 230 %5 
  ]
];
// console.log(array.length);
// console.log(array[4]);
// console.log(array[4][2]);


array[2] = "how are u";
// console.log(array);

// for(let i=0; i<array.length; i++) {
//   const element = array[i];
//   console.log(element, i);
// }

for(const element of array) {
  // console.log(element);
}

// 10
const newArray = [
  23,37,86,73,120,132,74,95,32, 10,5,189,167 ,44 ,65 ,154, 80.1
]

for(let i=0; i < newArray.length; i++) {
  if (newArray[i] > 80) 
    console.log(newArray[i]);
}

// 11
function multiplication(x,y,z) {
  const multi = x * y * z;
  return multi;
}
const value = multiplication(10,2,30);
// console.log(`the result is ${value}`);

// 12
const store = {
  jewellary : [ "ear ring", "ring", "set", "tikli", "toe ring", "nose pin", "bracelet"],
  shoes: ["flat" , "heels", "schl shoes"],
  bags:"gucci",
  dress: "only western dress"
}

store.bags = "louis vuitton";
// console.log(store);

// 1 ,2
// feet to inch
function feetToInch(feet) {
  const inch = feet *12 ;
  return inch;
}
const inches = feetToInch (8.8) ;
// console.log(inches);

// centimeterToMeter
function centimeterToMeter(centiMeter) {
  const meter = centiMeter /100;
  return meter;
}
const meterResult = centimeterToMeter(223);
// console.log(meterResult);


// 3
let firstBookPage = 100;
let secondBookPage = 200;
let thirdBookPage = 300;

function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
  const firstBook = firstBookCopy* firstBookPage;
  const secondBook = secondBookCopy * secondBookPage;
  const thirdBook = thirdBookCopy * thirdBookPage;

  const total = firstBook + secondBook + thirdBook;
  return `we need ${total} pages` ;
}

const value1 = paperRequirements (12,15,18);
// console.log(value1);

// 4
const friendName = [
  "jhorna",
  "sraboni",
  "himAhmed",
  "chatu",
  "siam",
  "dipika",
  "proma",
];

function bestFriend(friendName) {
  
  let largestName = friendName[0];
  for(const name of friendName) {
    if (name.length > largestName.length)
    largestName = name;
  }
  console.log(largestName);
}

const names = bestFriend(friendName);

// 5
const shongkha = [29,84,93, 84, 92, -38, 64,-36,46,54,66,-37 ,-74] ;

let newShongkha = [];
for (let i = 0; i < shongkha.length; i++) {
  if (shongkha[i] < -1) {
    console.log(newShongkha);
    break;
  }
    newShongkha.push(shongkha[i]);
}



for (let i = 0; i < shongkha.length; i++) {
  if (shongkha[i] < -1) 
    break;
    // console.log(shongkha[i]);
  
}


// const findPositive = shongkha.filter(number => number > -1 )
// console.log(findPositive);