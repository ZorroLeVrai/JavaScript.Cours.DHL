/**
 * Exercice 01 - VARIABLES - Les variables type chaines
 */

// Création d'une constante
const prenomElement = document.getElementById("prenom");
const nomElement = document.getElementById("nom");
const buttonExecuter = document.getElementById("executer");
const resultElement = document.getElementById('result');

buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  const prenom = prenomElement.value;
  const nom = nomElement.value;
  const resultat = `${prenom} ${nom}`;

  const texteAAfficher = `<h3> Addition de deux variables de type chaine </h3>
<p>Votre prénom : <b>${prenom}</b></p>
<p>Votre nom : <b>${nom}</b></p>
<p>Bonjour <b>${resultat}</b><p>`;

  // Patch des résultats dans le DOM
  resultElement.innerHTML += texteAAfficher;
}
