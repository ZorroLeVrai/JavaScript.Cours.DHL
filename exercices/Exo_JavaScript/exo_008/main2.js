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
    return;
  }

  if (age > 18) {
    categoryMessageElement.textContent = "Votre enfant est un adulte";
    return;
  }

  const categorie = obtenirCategorie(age);
  categoryMessageElement.textContent = `"Votre enfant est dans la catégorie ${categorie}"`;
}

/**
 * Retourne la catégorie de l'enfant en fonction de son age
 * @param {number} age Age de l'enfant
 * @returns {string} La catégorie de l'enfant
 */
function obtenirCategorie(age) {
  if (age < 3) {
    return "";
  }
  if (age <= 6) {
    return "Mini-Poussin";
  }
  if (age <= 8) {
    return "Poussin";
  }
  if (age <= 10) {
    return "Pupille";
  }
  if (age <= 12) {
    return "Minime";
  }
  if (age <= 18) {
    return "Cadet";
  }
  return "";
}