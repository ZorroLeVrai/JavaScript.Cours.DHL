class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}

Personne.prototype.texte = "Héro";
const personne1 = new Personne("Zorro", 35);
const personne2 = new Personne("Batman", 26);

console.log(personne1.texte);  //Héro
console.log(personne2.texte);  //Héro
(Object.getPrototypeOf(personne1)).texte = "Super Héro";
console.log(personne2.texte);  //Super Héro
console.log(personne2.toString());  //[object Object]
