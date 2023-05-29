let perChairWood = 5;
let perTableWood = 8;
let perBedWood = 20;

function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood+ tableWood + bedWood;
  return `${totalWood} wood is needed to complete the chair,table & bed by using ${chairWood} for chair, ${tableWood} for table , ${bedWood} for bed` ;
}

const wood = woodCalculator (1,1,1);
console.log(wood);