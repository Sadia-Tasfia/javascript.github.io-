/*
Note :
abs(used for remove negative sign)
ceil ( take the upper value)
floor( opposite of ceil)
round ( will show the nearest round number)

Topic:
1. abs
2. ceil
3. floor
4. round
5. random
*/

// Use abs (absolute number) , ceil, floor
const number = -21 ;
const output = Math.abs(number);
console.log(output);

const value = 21.9895573;
const output2 = Math.ceil(value);
const output3 = Math.floor(value);
const output4 = Math.round(value);

console.log("The value of ceil", output2);
console.log("The value of floor", output3);
console.log("The value of round", output4);

// random 
const output5 = Math.random () *6;
const rounded = Math.round(output5);
// const rounded2 = Math.ceil(output5);
// const rounded3 = Math.floor(output5);

console.log(output5);
console.log(rounded);

for (let i=0 ; i <=10; i++) {
  const output5 = Math.random() * 6;
  const rounded = Math.round(output5);
  console.log(rounded);
}