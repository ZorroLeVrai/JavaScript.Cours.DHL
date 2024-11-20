/**
 * EXERCICE 16 - Calculez vos impots
 */

const tranches = [
  new Tranche(11294, 0),
  new Tranche(28797, 0.11),
  new Tranche(82341, 0.3),
  new Tranche(177106, 0.41),
  new Tranche(1000000, 0.45)
];

const netImposableElement = document.getElementById("net_imposable");
const nombreAdulesElement = document.getElementById("nombre_adultes");
const nombreEnfantsElement = document.getElementById("nombre_enfants");
const buttonExecuter = document.getElementById("executer");
const impotsResultatElement = document.getElementById("impots_resultat");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 */
function executerAction() {
  const netImposable = netImposableElement.valueAsNumber;
  const nombreAdultes = nombreAdulesElement.valueAsNumber;
  const nombreEnfants = nombreEnfantsElement.valueAsNumber;

  const nbParts = calculerNbParts(nombreAdultes, nombreEnfants);
  const impots = calculerImpots(netImposable, nbParts);
}


/**
 * Calculer le nombre de parts
 * @param {number} nombreAdultes Nombre d'adultes
 * @param {number} nombreEnfants Nombre d'enfants
 * @returns {number} Le nombre de parts
 */
function calculerNbParts(nombreAdultes, nombreEnfants) {
  let nbParts = nombreAdultes;

  if (nombreEnfants <= 2) {
    nbParts += nombreEnfants / 2;
  }
  else {
    nbParts += nombreEnfants - 1;
  }

  return nbParts;
}


/**
 * Calculer les impots
 * @param {number} netImposable Net imposable
 * @param {number} nbParts Nombre de parts
 * @returns {number} Les impots
 */
function calculerImpots(netImposable, nbParts) {
  let impots = 0;
  let tranche = 0;
  let reste = netImposable;

  for (let i = 0; i < TRANCHE.length; i++) {
    tranche = TRANCHE[i];
    if (reste > tranche) {
      impots += tranche * TAUX[i];
      reste -= tranche;
    }
    else {
      impots += reste * TAUX[i];
      break;
    }
  }

  return impots;
}


class Tranche {
  constructor(montant, taux) {
    this.montant = montant;
    this.taux = taux;
  }
}