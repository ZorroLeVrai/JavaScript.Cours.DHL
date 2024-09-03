class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  afficherType() {
    console.log(typeof Rectangle);
  }
}
Rectangle.prototype.afficherNomFonction = () => console.log(Rectangle.name);

//Afficher toutes les propriétés du prototype de Rectangle
Object.getOwnPropertyNames(Rectangle.prototype).forEach(item => console.log(item));
// constructor
// afficherType
// afficherNomFonction
