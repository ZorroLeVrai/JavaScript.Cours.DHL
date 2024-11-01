/**
 * EXERCICE04 - Les Variables et Opérateurs Arithmétiques - Les Palindromes
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const initialCapitalElement = document.getElementById("initial_capital");
const rateElement = document.getElementById("rate");
const timeElement = document.getElementById("time_in_years");
const buttonExecuter = document.getElementById("executer");
const interestElement = document.getElementById("interest");
const finalCapitalElement = document.getElementById("final_capital");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  // Récupération et stockage des saisies utilisateur
  const initialCapital = initialCapitalElement.valueAsNumber;
  const rate = rateElement.valueAsNumber / 100;
  const investmentTime = timeElement.valueAsNumber;

  const finalCapital = initialCapital * Math.pow(1 + rate, investmentTime);
  const interestValue = finalCapital - initialCapital;

  //Mise à jour de la page
  interestElement.textContent = interestValue;
  finalCapitalElement.textContent = finalCapital;
}
