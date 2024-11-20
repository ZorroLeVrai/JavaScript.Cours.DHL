/**
 * EXERCICE08 - Quelle catégorie pour mon enfant?
 */

const ageElement = document.getElementById("age");
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

  if (age < 3) {
    categoryMessageElement.textContent = "Votre enfant est trop jeune pour pratiquer ce sport";
  } else if (age <= 6) {
    categoryMessageElement.textContent = "Votre enfant est dans la catégorie Mini-Poussin";
  } else if (age <= 8) {
    categoryMessageElement.textContent = "Votre enfant est dans la catégorie Poussin";
  } else if (age <= 10) {
    categoryMessageElement.textContent = "Votre enfant est dans la catégorie Pupille";
  } else if (age <= 12) {
    categoryMessageElement.textContent = "Votre enfant est dans la catégorie Minime";
  } else if (age <= 18) {
    categoryMessageElement.textContent = "Votre enfant est dans la catégorie Cadet";
  } else {
    categoryMessageElement.textContent = "Votre enfant est un adulte";
  }
}
