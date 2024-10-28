/**
 * EXERCICE 03 - Les Variables et Opérateurs Arithmétiques - L'objet Math en Javascript
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const diametreElement = document.getElementById("diametre");
const buttonExecuter = document.getElementById("executer");
const piElement = document.getElementById("pi");
const perimetreElement = document.getElementById("perimetre");
const perimetreArrondiElement = document.getElementById("perimetre_arrondi");
const aireElement = document.getElementById("aire");
const aireArrondiElement = document.getElementById("aire_arrondi");
const resultElement = document.getElementById('result');

// Déclaration de constante
const pi = Math.PI;

buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  //Affiche des éléments de résultat
  resultElement.classList.remove("remove");

  // Récupération et stockage des saisies utilisateur
  const diametre = Number(diametreElement.value);

  //calculs
  const perimetre = diametre * pi;
  const aire = pi * Math.pow((diametre / 2), 2);

  //Mise à jour des éléments HTML
  piElement.textContent = pi;
  perimetreElement.textContent = perimetre;
  perimetreArrondiElement.textContent = Math.round(perimetre, 2);
  aireElement.textContent = aire;
  aireArrondiElement.textContent = Math.round(aire, 2);
}
