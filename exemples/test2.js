const personne = {
    nom: "John",
    prenom: "Doe",
    afficher() {
        console.log(this.nom + " " + this.prenom);
    }
};

const eleve = Object.create(personne);
eleve.classe = "CM2";
eleve.afficher = function() {
    console.log(this.nom + " " + this.prenom + " " + this.classe);
};

personne.afficher();

console.log(eleve);
eleve.afficher();