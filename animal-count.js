let first10Miles = 10;
let second10Miles= 50;
let thirdMiles = 100;

function animalCount(miles) {
  if(miles <= 10) {
    const count = miles* first10Miles;
    return count;
  }
  else if(miles <=20) {
    const firstMilesAnimals = 10 *first10Miles;
    const restMiles = miles -10;
    const secondMilesAnimals = restMiles *second10Miles;
    
    const total = firstMilesAnimals + secondMilesAnimals;
    return total; 
  }
  else {
    const firstMilesAnimals = 10 * first10Miles;
    const secondMilesAnimals = 10*second10Miles;
    const restMiles = miles - 20;
    const thirdMilesAnimals = restMiles * thirdMiles;

    const total = firstMilesAnimals + secondMilesAnimals + thirdMilesAnimals;
    return total; 
  }
}

const mile = animalCount(35);
console.log("Total animals is", mile);