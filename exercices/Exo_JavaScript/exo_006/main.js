/**
 * EXERCICE06 - Les conditions
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const ageElement = document.getElementById("age");
const buttonExecuter = document.getElementById("executer");
const messageElement = document.getElementById("message");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  const age = ageElement.valueAsNumber;

  if (age >= 18)
    messageElement.textContent = "La personne est majeur";
  else
    messageElement.textContent = "La personne est mineur";
}
