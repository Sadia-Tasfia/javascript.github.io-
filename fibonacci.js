/*
0,1,1,2,3,5,8,13,21,34,55

3rd= 2nd + 1st
4th= 3rd + 2nd
5th= 4th + 3rd
6th= 5th + 4th
nth = (n-1) + (n-2)th

Topic :
1. fibonacci using function 
2. fibonacci using for loop
*/ 

// fibonacci using for loop
let fibo = [0,1] ;
for(let i=2; i <=12; i++) {
  fibo[i]= fibo [i-1] + fibo[i-2];
}
console.log(fibo);

// fibonacci using function 
function fibonacciSeries(num) {
  let fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

let series = fibonacciSeries (5);
console.log("the fibonacci series is", series);

// Handle unexpected input
function fibonacciSeries2(num) {
  if (typeof num != "number") {
    return "Please give a number ❌";
  } else if( num <2) {
    return " Negative number doesn't allow 😭"
  }

  let fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

// let series2 = fibonacciSeries2([4]);
let series2 = fibonacciSeries2(-10);
console.log(series2);

