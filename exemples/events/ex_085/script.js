function afficherAlerte() {
  //récupére la dimension de la fenêtre
  const largeur = window.innerWidth;
  const hauteur = window.innerHeight;
  //affiche une alerte
  window.alert(`Dimensions de la fenêtre (${largeur}, ${hauteur})`);
}

//exécute la fonction après 5000ms
window.setTimeout(afficherAlerte, 5000);
