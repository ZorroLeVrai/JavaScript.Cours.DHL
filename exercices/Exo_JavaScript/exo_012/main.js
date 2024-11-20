/**
 * EXERCICE 12 - Pliage de feuille
 */

const epaisseurFeuilleElement = document.getElementById("epaisseur_feuille");
const epaisseurCibleElement = document.getElementById("epaisseur_cible");
const buttonExecuter = document.getElementById("executer");
const categoryMessageElement = document.getElementById("categorie_message");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  const epaisseurFeuilleEnMm = epaisseurFeuilleElement.valueAsNumber;
  const epaisseurCibleEnMm = 1000 * epaisseurCibleElement.valueAsNumber;
  const nbPliages = calculerNbPliages(epaisseurFeuilleEnMm, epaisseurCibleEnMm);

  categoryMessageElement.textContent = `Le nombre de pliage nécessaire est : ${nbPliages}`;
}


/**
 * Calculer le nombre de pliage nécessaire
 * @param {number} epaisseurFeuilleEnMm Epaisseur de la feuille en mm
 * @param {number} epaisseurCibleEnMm Epaisseur cible en mm
 * @returns Le nombre de pliage nécessaire
 */
function calculerNbPliages(epaisseurFeuilleEnMm, epaisseurCibleEnMm) {
  let nbPliages = 0;

  while (epaisseurFeuilleEnMm < epaisseurCibleEnMm) {
    epaisseurFeuilleEnMm *= 2;
    nbPliages++;
  }

  return nbPliages;
}