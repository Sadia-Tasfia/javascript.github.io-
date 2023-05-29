/*
NOTE:
1.string er sob theke choto maan eta "" majhe kono gap hobe na.
2.split() eta maddhome string ke array te ne..
3.split("") - ei method string gulo ke alada kore and alada index o de.
4.join("") - eta array ke string e nibe


Topic:
1. Normal form
2. Reverse array
3. Reverse string
4. Reverse string using for loop
*/ 

// Normal 
const greeting = "what's up??"

function reverseString(text) {
  for(const letter of text) {
    console.log(letter);
  }
}
const reversed = reverseString(greeting);
// console.log(reversed);  



// reverse array
const numbers = [1,2,3,4,5] ;
const newNum = numbers.reverse();


console.log(newNum);


// reverse string
const names = "tasfia";

const reverseName = names.split("").reverse().join("");
console.log(reverseName);


// reverse string using for loop
let string = "Goltu🥰";
let newString = string.length;

// for(let i=newString ; i>=0 ;i--)
for(let i= newString -1; i>=0 ; i--)
{
  console.log(string[i]);
}

// example-2
let string2 = "him🥰";
let newString2 = string.length;
let revstr = "";

for(let i= newString2 -1; i>=0 ; i--){
  revstr= revstr+ string[i];
  // console.log(revstr);
}
console.log(`${string2} reverse is ${revstr}`);


// example-3
let string3 = "ahmed";
let revstr3 = "";

for (let i =0; i <= string3.length-1 ; i++) {
  revstr3 = string3[i] + revstr3 ;
  // console.log(revstr3);
}
console.log(`${string3} reverse is ${revstr3}`);


 