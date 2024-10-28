class maClasse {
  #texte;
  constructor(texte) { this.#texte = texte; }
  get texte() {
    console.log("lecture de la variable");
    return this.#texte;
  }
  set texte(value) {
    console.log("écriture de la variable");
    this.#texte = value;
  }
}
const obj = new maClasse("ES6");
const t = obj.texte;  //lecture de la variable
obj.texte = "ES7";  //"écriture de la variable"
console.log(obj);  //maClasse {}
