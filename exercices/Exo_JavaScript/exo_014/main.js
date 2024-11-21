/**
 * EXERCICE 14 - Calculez la somme de la liste
 */

const termeDebutElement = document.getElementById("terme_debut");
const termeFinElement = document.getElementById("terme_fin");
const buttonExecuter = document.getElementById("executer");
const listeNombresElement = document.getElementById("liste_nombres");
const sommeNombresElement = document.getElementById("somme_nombres");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 */
function executerAction() {
  const termeDebut = termeDebutElement.valueAsNumber;
  const termeFin = termeFinElement.valueAsNumber;
  const listeNombres = creerListe(termeDebut, termeFin);
  const somme = calculerSomme(listeNombres);

  listeNombresElement.textContent = `La liste : ${listeNombresToString(listeNombres)}`;
  sommeNombresElement.textContent = `La somme est : ${somme}`;
}


/**
 * Calculer le nombre de pliage nécessaire
 * @param {number} termeDebut
 * @param {number} termeFin
 * @returns Le nombre de pliage nécessaire
 */
function creerListe(termeDebut, termeFin) {
  let liste = [];
  for (let i = termeDebut; i <= termeFin; i++) {
    liste.push(i);
  }
  return liste;
}


/**
 * Calcule la somme des nombres
 * @param {number[]} listeNombres Liste de nombres
 * @returns {number} La somme des nombres
 */
function calculerSomme(listeNombres) {
  let somme = 0;
  for (const nombre of listeNombres) {
    somme += nombre;
  }
  // for (let i = 0; i < listeNombres.length; i++) {
  //   somme += listeNombres[i];
  // }
  return somme;
}


/**
 * Calcule la somme des nombres
 * @param {number[]} listeNombres Liste de nombres
 * @returns {number} La somme des nombres
 */
function calculerSomme2(listeNombres) {
  return listeNombres.reduce((somme, nombre) => somme + nombre, 0);
}


/**
 * Transforme une liste de nombres en chaine de caractères
 * @param {number[]} listeNombres Liste de nombres
 * @returns {string} La liste des nombres
 */
function listeNombresToString(listeNombres) {
  return listeNombres.join(", ");
}
