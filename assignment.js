// Problem 1
// 16 ana =1 vori
function anaToVori(ana) {
  const vori = ana /16;
  return vori;
}

const voriResult = anaToVori(32);
// console.log(voriResult);


// Problem 2
function pandaCost(singaraQuantity,somuchaQuantity,jilabiQuantity) {
  const singara =singaraQuantity * 7;
  const somucha = somuchaQuantity *10;
  const jilabi = jilabiQuantity * 15;
  const total = singara + somucha + jilabi;

  return total;
}
// console.log(pandaCost(5,3,2));

// Problem 3
function picnicBudget(people) {
  if(people <=100) {
    const first100People =people *5000 ;
    return first100People;
  }
  else if(people >=100 && people<=200) {
    const first100People = 100 * 5000;
    const second100People = (people - 100) * 4000;
    const totalBudget2  = first100People + second100People;

    return totalBudget2;
  }
  else {
    const first100People = 100 * 5000;
    const second100People = 100 * 4000;

    const restOfPeople =(people -200) * 3000;
    const totalBudget3 = first100People + second100People + restOfPeople ;
    return totalBudget3;
  }
}

const picnicTotalBudget = picnicBudget(202);
// console.log(picnicTotalBudget);


// Problem 4
const friends = [
  "jhorna",
  "dipika",
  "shawon",
  "him",
  "sraboni",
  "proma",
  "siam",
  "razu",
];

function oddFriend(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length % 2 != 0) {
      return friends[i];
    }
  }
}
const oddFriendName = oddFriend(friends);
// console.log(oddFriendName);