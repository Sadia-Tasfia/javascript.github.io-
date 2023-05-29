// find the total amount from object using for loop
const productDetails = [
  { name: "dress", price: 8500 },
  { name: "sandel", price: 1200 },
  { name: "watch", price: 1500 },
  { name: "phone", price: 20000 },
];
let total = 0;
for (const product of productDetails) {
  total = total + product.price;
}
console.log(total);


// example-2
const cart = [
  { name: "dress", price: 8500, quantity: 3 },
  { name: "sandel", price: 1200, quantity: 2 },
  { name: "watch", price: 1500, quantity: 1 },
  { name: "phone", price: 20000, quantity: 1 },
];

let cartTotal = 0;
for (const product of cart) {
  const productTotal = product.price * product.quantity;
  cartTotal = cartTotal + productTotal;
}
console.log("the total amount for shopping", cartTotal);
