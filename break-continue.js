// CONTINUE AND BREAK
const newArray = [10, true, " SADIA" ,20,59, false, "tasfia"];

for (let i = 0; i < newArray.length; i++) {
  if (typeof newArray[i] === "string") 
  continue;
  console.log(newArray[i], typeof newArray[i]);
  // console.log(typeof newArray);
}

//  example-1
let value = [121, 317, 148, 95, 202, 101, 178, 374, 109];
for (let i=0; i< value.length; i++) {
  let value1 = value[i]; 
  if ( value1 >160) {
    continue;
  }
  console.log(value1);
}


// example-2
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] === newArray[2]) 
  break;
  console.log(newArray[i] , i);
  // console.log(typeof newArray);
}

// example-3
let i = 1;
while ( i<=8 ) {
  console.log("TASFIA", i);
  if ( i == 5) {
    break;
  }
  i+=2;
}

