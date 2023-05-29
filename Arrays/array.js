// Arrays (non primitive or array is one kind of object)
/* TOPICS:
1.literal syntax
2.array function
3.finding elements in array bt index
4.array length
ARRAY METHOD( push,unshift,pop,shift,indexof,includes)
5.push - add element in the end
6.unshift- add element at the beginning
7.pop -remove element from the end
8.shift -remove element from the beginning
9.finding includes and index by element
10.currying functions
11.lambda calculus or lambda function declaration 
12. THIS METHOD

*/

// const friend1 = "him";
// const friend2 ="shawon";
// const friend3 ="proma";
// const friend4 ="jhorna";

const friends =["Him", "shawon","proma","jhorna"]; //literal syntax
console.log(friends); 
console.log(typeof friends);

// array function
// const years =[1999, 1997,1789, 1899];
const years = new Array(1999, 1997, 1789,1899, 1876); 
console.log(years);
console.log(years[3]);

const menu = new Array(238, "hey", "hello", 6573, "bye", 373, "hi");
console.log(menu[4][1]);

// finding elements in array by index
console.log(friends[5]);
console.log(years[1]);
console.log(friends[0]);

// array length
console.log(years.length);
console.log(friends.length);

// exercise
const ageCalc = function(birthYear){
  return 2022 - birthYear;
}
const age1 = ageCalc(years[0]);
const age2 = ageCalc(years[6]);
console.log(age1);
console.log(age2);

// push - add element in the end
// unshift- add element at the beginning
// pop -remove element from the end
// shift -remove element from the beginning

const benchers =['nafi','roho','mim','sadia'];

benchers.push('');
benchers.push('nishu','shipa');
benchers.unshift('shusmi');
benchers.unshift(354);
// benchers.pop();
// benchers.shift();

console.log(benchers);
console.log(benchers.length);
console.log(benchers[2]);

// finding the elements by includes and index
console.log(benchers.indexOf('sadia'));
console.log(benchers.indexOf("proma"));
console.log(benchers.includes('him'));
console.log(benchers.includes("mim"));
console.log(benchers.includes(' '));

if(benchers.includes('pinky')) {
  console.log("she is our CR");
} else {
  console.log('Unknown');
}

if(benchers.indexOf('roho') !== -1) {
  console.log('She is our friend');
} else {
  console.log('unknown');
}

// exercise
/* 2 teams: lionsClub, dragonClub 
team member :5 per team
lionsClub : 14,13.4 ,15,17,8
dragonClub : 10, 12.8 ,16 ,9 ,10

conditions:
winner:average jump distance >=15
draw: lions ===  dragon, both teams has >=15
*/

const scoreLions = (14 + 13.4 + 15 + 17 +18) / 5;
console.log(scoreLions);

const scoreDragon = (19 + 12.8 +16 + 18 + 10) / 5;
console.log(scoreDragon);

if (scoreLions >= 15 && scoreDragon >= 15) {
  if (scoreLions === scoreDragon) {
    console.log('draw');
  } else if (scoreLions > scoreDragon) {
    console.log('Winner is lions');
  } else {
    console.log('Winner is Dragon');
  }
} else {
  console.log('match dismiss');
}

// currying functions 
function multi(a){
  return function (x){
    return function (y){
      return function (z){
        return a + x +y +z;
      };
    };
  };
}
console.log(multi(20)(12)(8)(10));

// lambda calculus or lambda function declaration
const multiPro =(a) => (b) => (c) => (z) => a+b+c-z;
const epu1 = multiPro(10);

console.log(epu1); 
console.log(multiPro(12)(8)(30)(15));




// PART 8



// THIS METHOD 
const student2 = {
  firstName2: 'Proma',
  lastName2: 'das',
  birthYear: 1999,

  calcAge: function () {
    return `Iam ${2023 - this.birthYear} years old`;
  },

  greetings: function() {
    return `hello ${this.firstName2}. How are you ?`;
  }
};

console.log(student2.calcAge());
console.log(student2.greetings());

const student3 = student2;
student3.firstName2 = "Jhorna";
console.log(student3);
console.log(student2);




// PART 8 ENDS HERE


// prac
// PART 9 STARTS HERE
function breadcutter(breads) {
  return breads*2;
}
function pizzamaker(breads,cheese,chicken){
  const breadpieces =breadcutter(breads);
  return `Pizza is ready using ${breadpieces} breadpieces and ${cheese} mozallarela cheese and ${chicken} chicken`;
}
console.log(pizzamaker(5, 0.5, 1.3));

// curry function
function result(a) {
  return function(b,x,y) {
    return function(c) {
      return a + b*c +x + y;
    }
  }
}
console.log(result(10) (3,6,4) (4));

const resultpro = (a) => (b, x, y) => (c) => a + b * c + x + y;
console.log(resultpro(10)(3, 6, 4)(4));

// array
const values =[10,54/76, 'hello', 69-29 ,'bye'];
console.log(values[1] , values);

const list = new Array(20 * 1, "bye", "me", 450 / 27, "lorem", 6 ** 4);
console.log(list);
console.log(list.length);

// mutate
values[2] ="sadia" +" "+ "tasfia";
list[list.length -1] ="sujana";
console.log(values);
console.log(list);

// array method 
values.push(2021,2022,2023,2024,2025);
values.unshift("her","him");
values.pop();
values.shift();

console.log(values);

console.log(list.indexOf("bye"));
console.log(list.indexOf('hello world'));


// object & this method
const restuarant = {
  restuarantName: "Tabib",
  founding: 2030,
  founder: "US",
  setMenu: [
    "burger",
    "pizza",
    "pasta",
    "grill",
    "sausage",
    "chicken",
    "beef",
    "milkshake",
    "coffee",
    ["bhaat", "bhorta", "mach", "daal"],
  ],
  foodCount: function () {
    return `they have variety food more than ${this.setMenu.length} items`;
  }
};
console.log(typeof restuarant.setMenu );
console.log(restuarant.setMenu[3]);
console.log(restuarant.foodCount());
console.log(typeof restuarant.foodCount());

// PART 9 ends here



