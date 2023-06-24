//For LOOP
for (let i = 5; i <= 20; i += 5) {
  console.log("sadia", i);
}

for (let i = 0; i <= 5; i++) {
  console.log("tasfia", i);
}

for (let i = 10; i > 6; i--) {
  console.log("sujana", i);
}

// example-1
const friendList = [
  "jhorna",
  "sraboni",
  2023 - 2000,
  "dipika",
  "siam",
  "rasel",
  ["they are my school friend"],
  ["banker", "businesswomen", 28, "housewife"],
  true,
  32 - 21,
];
for (let i = 0; i < friendList.length; i++) {
  console.log(friendList[i], i);
}

// example-2
const newArray = [
  10,
  true,
  "chicken",
  "meat",
  28 * 10,
  "cotton candy",
  125 / 5,
  "pizza",
  20 + 65,
  false,
  true,
];
console.log(newArray);

const newArray2 = [];
for (let i = 0; i < newArray.length; i++) {
  newArray2.push(newArray[i]);
  // newArray2.push(typeof newArray[i]);
  console.log(newArray2, i);
}

// example-3
const year = [1984, 1986, 1987, 1992, 1993, 1998];

const ages = [];
for (let i = 0; i < year.length; i++) {
  ages.push(2023 - year[i]);
}
console.log(ages);

// example-4
const arr = [1, 3, 5, 7, 9];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// largest number above 80
const newArray1 = [
  23, 37, 86, 73, 120, 132, 74, 95, 32, 10, 5, 189, 167, 44, 65, 154, 80.1,
];

for (let i = 0; i < newArray1.length; i++) {
  if (newArray1[i] > 80)
    console.log(newArray1[i]);
}

