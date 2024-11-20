/**
 * EXERCICE 11 - Inverser une chaine de caractères
 */

const texteElement = document.getElementById("texte");
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

  const texteInvese = inverserTexte(texteElement.value);
  categoryMessageElement.textContent = `Le texte inversé est : ${texteInvese}`;
}


/**
 * @param {string} texte Texte à inverser
 * @returns Le texte inversé
 */
function inverserTexte(texte) {
  let texteInverse = "";
  for (let i = texte.length - 1; i >= 0; --i) {
    texteInverse += texte[i];
  }
  return texteInverse;
}