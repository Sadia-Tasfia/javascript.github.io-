/* 
Topics:
1. forof loop or shortcut of for loop
2. Remove duplicate name
*/ 

// forof loop or shortcut of for loop
const names = [ 'jhorna' ,'him' , 'sraboni' , 'dipika', 'chatu', 'him', 'jhorna' , 'him', 'dipika', 'him' ] ;

function friendList(names){
    // for (let i = 0; i < names.length; i++) {
    //   const element = names[i];
    //   console.log(element);
    // }

    // for of loop method or shortcut for loop
    for (const element of names) {
      console.log(element); 
    }
}
const uniqueName = friendList(names) ;
console.log(uniqueName);


// Remove duplicate name
function removeDuplicate(names) {
  const unique = [];

  for (const element of names) {
    // console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
const uniqueName2 = removeDuplicate(names);
console.log(uniqueName2);


// example -2
let numberArray = [10,25,20,40,10,25,20,20,10,40,10,25,30,10,50] ;
// console.log(numberArray.length);

function removeDuplicateNumber (numberArray) {
  let newNumber = [] ;

  for(const element2  of numberArray) {

    if (newNumber.includes(element2) == false) {
      newNumber.push(element2);

    }
  }
  return newNumber;
}
let numbers = removeDuplicateNumber(numberArray);
console.log(numbers);