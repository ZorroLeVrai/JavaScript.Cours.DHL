//crée un objet avec le prototype donné en argument
const obj = Object.create({ nom: "Prototype"});
console.log(obj.nom);  // Prototype;
obj.nom = "Instance";
console.log(obj.nom);  // Instance;
console.log(Object.getPrototypeOf(obj).nom);  // Prototype;