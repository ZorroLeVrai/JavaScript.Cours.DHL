/**
 * EXERCICE 16 - Calculez vos impots
 */
import { tranches } from "./tranches.js";

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
  afficherImpots(impots);
}


/**
 * Afficher les impots
 * @param {number} impots Les impots
 */
function afficherImpots(impots) {
  if (impots <= 0) {
    impotsResultatElement.textContent = "Vous n'avez pas d'impots à payer";
    return;
  }

  impotsResultatElement.textContent = `Le montant de vos impots est de : ${impots.toFixed(2)} €`;
}


/**
 * Calculer le nombre de parts
 * @param {number} nombreAdultes Nombre d'adultes
 * @param {number} nombreEnfants Nombre d'enfants
 * @returns {number} Le nombre de parts
 */
function calculerNbParts(nombreAdultes, nombreEnfants) {
  if (nombreEnfants <= 2) {
    return nombreAdultes + nombreEnfants / 2;
  }

  return nombreAdultes + nombreEnfants - 1;
}


/**
 * Calculer les impots
 * @param {number} netImposable Net imposable
 * @param {number} nbParts Nombre de parts
 * @returns {number} Les impots
 */
function calculerImpots(netImposable, nbParts) {
  let impotsParPart = 0;
  let seuilPrecedent = 0;
  const netImposableParPart = netImposable / nbParts;

  for (const { seuil, taux } of tranches) {
    if (netImposableParPart > seuil) {
      impotsParPart += (seuil - seuilPrecedent) * taux;
      seuilPrecedent = seuil;
    }
    else {
      impotsParPart += (netImposableParPart - seuilPrecedent) * taux;
      break;
    }
  }

  return impotsParPart * nbParts;
}
