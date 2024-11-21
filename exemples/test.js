let price = 20;
const obj = { prix: 20 };

changerPrice(price);
changerObj(obj);

console.log(price); // 20
console.log(obj); // 30

function changerPrice(price) {
  price = 30;
}

function changerObj(obj) {
  obj.prix = 30;
}
