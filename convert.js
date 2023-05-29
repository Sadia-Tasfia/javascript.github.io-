/*
Topic:
1. Convert the inch to feet and miles to kilometer
2. find even or odd number using function
3. find leap year using function
4. Convert celsius to fahrenheit
5. Convert fahrenheit to celsius
6. Simple interest

Note: 
1 foot= 12inch
1 mile = 1.60934 kilometer
 */ 


// convert inch to feet
function inchToFeet(inches) {
  let feet = inches / 12;
  return feet;
}

let myInches = 64;
let myFeet = inchToFeet(myInches) ;
console.log("My inches in feet", myFeet);

// example-2
let myDadaInches =70 ;
let dadaFeet = myDadaInches /12;
console.log("My dadas inches in feet", dadaFeet);


// convert  mile to kilometer
function mileToKilometer (miles) {
  let kilometer = miles* 1.60934;
  return kilometer;
}

// console.log("marathon in km", mileToKilometer(10.3));
let marathon = mileToKilometer(10.3);
console.log("Marathan in km", marathon + " km");


// find even or odd number
function findTheNumber (number) {
  if (number %2 ==0 ) {
    return true ,`This ${number} is an even number` ;
  }
  return false ,`This ${number} is an odd number`;
}
let numbers =findTheNumber (22.1);
console.log(numbers);

// find leap year or not 
function findLeapYear (year) {
  if (year %4 ==0 && year% 400 !=0 ) {
    return true, `${year} is a leap year`;
  }
  return false , `${year} is not a leap year`;
}

let leapYear = findLeapYear (2033);
console.log(leapYear);

// Convert celsius to fahrenheit
function celsiusToFahrenheit (C) {
  let F = (C * 9/5) + 32 ;
  return F;
}
let fahrenheit = celsiusToFahrenheit (39) ;
console.log("The value of fahrenheit", fahrenheit + "F");

// Convert fahrenheit to celsius
function fahrenheitToCelsius (F) {
  let C = (F - 32) * 5/9;
  return C;
}
let celsius = fahrenheitToCelsius(102.2);
console.log(celsius + "°C");

// Simple interest 
function findInterest (P , r, t) {
  let A = P * (1 +  (r/100) *t);
  return A;
}

let myInterest = findInterest(10000, 3.875 , 5);
console.log("$",myInterest);