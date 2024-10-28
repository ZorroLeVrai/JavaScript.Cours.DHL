class Rectangle {
  //propriétés privées
  #hauteur;
  #largeur;
  constructor(hauteur, largeur) {
    this.#hauteur = hauteur;
    this.#largeur = largeur;
  }
  //méthode privée
  #afficherPrive() { console.log(`hauteur: ${this.#hauteur}, largeur: ${this.#largeur}`); }
  afficher() { this.#afficherPrive(); }
}

const rect = new Rectangle(100, 200);
rect.afficher();
