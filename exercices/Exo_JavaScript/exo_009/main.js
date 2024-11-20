/**
 * EXERCICE 9 - Prime de licenciement
 */

const ageElement = document.getElementById("age");
const ancienneteElement = document.getElementById("anciennete");
const salaireElement = document.getElementById("salaire");
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

  const age = ageElement.valueAsNumber;
  const anciennete = ancienneteElement.valueAsNumber;
  const salaire = salaireElement.valueAsNumber;

  const indemniteEnMois = calculerIndemniteEnMois(age, anciennete);
  const indemniteEnEuro = salaire * indemniteEnMois;

  categoryMessageElement.textContent = `L'indemnité de départ est de ${indemniteEnEuro} €`;
}


/**
 * 
 * @param {number} age Age du salarié
 * @param {number} anciennete Ancienneté du salarié en année
 */
function calculerIndemniteEnMois(age, anciennete) {
  let indemnite = 0;

  if (anciennete <= 10) {
    indemnite = anciennete * 0.5;
  } else {
    indemnite = 5 + (anciennete - 10);
  }

  if (age > 50) {
    indemnite += 5;
  } else if (age >= 46) {
    indemnite += 2;
  }

  return indemnite;
}
