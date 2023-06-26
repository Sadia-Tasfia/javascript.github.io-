/* 
Topic:
1. Search any product
2. Break-down 
*/ 

// 1. Search any product

const products = [
  {name: "iphone 14", price: 120000},
  {name: "samsung galaxy 12", price: 60000},
  {name: "dell laptop", price: 54000},
  {name: "lenovo yoga", price: 52000},
  {name: "asus laptop 14", price: 32000},
  {name: "smart watch", price: 6500},
  {name: "apple watch", price: 10100},
  {name: "one plus phone", price: 45030}
];

function searchProducts (products ,searchTexts) {
  let newProduct = [];
  for(const product of products) {
    if(product.name.includes(searchTexts)) {
      newProduct.push(product);
    }
  }
  return newProduct;
}
const matched = searchProducts(products, "phone");
console.log(matched);


//  Break and continue 
for(const product of products) {
  if(product.price < 30000) {
    // break;
    continue;
  }
  console.log(product);
}