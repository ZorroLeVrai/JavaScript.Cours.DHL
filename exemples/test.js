class Vide {
  constructor() {
    this.afficher = () => console.log("afficher", this);
  }

  toto() {
    console.log("toto", this);
  }
}

const obj = new Vide();
obj.afficher();
obj.toto();

const afficher = obj.afficher;
const toto = obj.toto.bind(obj);
afficher();
toto();
