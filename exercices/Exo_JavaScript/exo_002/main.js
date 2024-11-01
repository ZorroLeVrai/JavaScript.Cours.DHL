/**
 * EXERCICE02 - Les Variables et Opérateurs Arithmetiques - Les variables numériques
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const operande1Element = document.getElementById("operande1");
const operande2Element = document.getElementById("operande2");
const buttonExecuter = document.getElementById("executer");
const resultElement = document.getElementById('result');

buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  // Récupération et stockage des saisies utilisateur
  const nb1 = operande1Element.valueAsNumber;
  const nb2 = operande2Element.valueAsNumber;

  // Addition des deux nombres
  const resultat = nb1 + nb2;

  // Injection du résultat dans l'element HTML .result
  resultElement.innerHTML = `<h3>Addition de deux variables numériques</h3>
  <p>Vous avez saisi <b>${nb1}</b> </p>
  <p>Vous avez saisi <b>${nb2}</b> </p>
  <p>La somme de <b>${nb1}</b> + <b>${nb2}</b> = <b>${resultat}</b><hr><p>`;
}
