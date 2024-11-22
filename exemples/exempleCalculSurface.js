class Forme {
  constructor(type) {
    this.type = type;
  }

  afficherType() {
    console.log(this.type);
  }
}

class Carre extends Forme {
  constructor(cote) {
    super('carre');
    this.cote = cote;
  }

  calculerAire() {
    return this.cote * this.cote;
  }
}

class Cercle extends Forme {
  constructor(rayon) {
    super('cercle');
    this.rayon = rayon;
  }

  calculerAire() {
    return Math.PI * this.rayon * this.rayon;
  }
}

const formes = [
  new Carre(4),
  new Cercle(3),
  new Carre(2),
  new Cercle(1)
];


/**
 * 
 * @param {Forme[]} formes collection de formes
 * @returns {number} somme des aires des formes
 */
function calculerAires(formes) {
  let surface = 0;
  for (const forme of formes) {
    surface += forme.calculerAire();
  }

  return surface;
}

console.log(calculerAires(formes));


class FormeConteneur {
  constructor(formes) {
    this.formes = formes;
  }

  calculerAires() {
    let surface = 0;
    for (const forme of this.formes) {
      surface += forme.calculerAire();
    }
  
    return surface;
  }
}

const conteneur = new FormeConteneur(formes);
console.log(conteneur.calculerAires());