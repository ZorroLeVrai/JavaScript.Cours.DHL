const obj1 = {};
const obj2 = new Object();

const obj3 = { "one": 1, "two": 2 };
console.log(obj3.one);     //1
console.log(obj3["two"]);  //2

obj3.three = 3;
console.log(obj3); //{ one: 1, two: 2, three: 3 }

obj3.afficher = function () { console.log(this); }
obj3.afficher();  //{ one: 1, two: 2, three: 3, afficher: [Function (anonymous)] }

delete obj3.afficher;
console.log(obj3);   //{ one: 1, two: 2, three: 3 }
