/* TOPICS:
1.Multiple parameter function
2. 13 namta
3. Addition , multiplication
*/
function bringNoteBook(taka) {
  console.log("Given money", taka);
  console.log("give me more notebook");

  var notebookPrice = 25;
  var notebookQuantity = taka / notebookPrice;
  return notebookQuantity;
}

var notebook = bringNoteBook(300);
console.log("here is all your notebook", notebook);

// example-addition
function addTwoNumber(a, b) {
  var result = a + b;
  return result;
}

var firstNumber = 20;
var secondNumber = 50;
var total = addTwoNumber(secondNumber, firstNumber);
// var total = addTwoNumber (20,50);
console.log(total);

// 13 multiplication
function multiplication(number) {
  console.log("the 13 multiplication starts here");

  for (let number = 0; number <= 10; number++) {
    let ans = 13 * number;
    console.log(ans, number);
  }
}
// multiplication(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
multiplication ();
