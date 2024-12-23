/**
 * EXERCICE18 - Quelle catégorie pour mon enfant?
 */

import { CategoryData, jsonCategories } from "./data.js";

const ageElement = document.getElementById("age");
const buttonExecuter = document.getElementById("executer");
const categoryMessageElement = document.getElementById("categorie_message");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

//récupération des données du JSON
const categories = JSON.parse(jsonCategories);

/**
 * Retourne la catégorie de l'enfant en fonction de son age
 * @param {number} age 
 * @returns {string} la catégorie de l'enfant
 */
function retournerCategorie(age) {
  const categoryObj = categories.find(category => age >= category.ageMin && age <= category.ageMax);
  return categoryObj ? categoryObj.categoryName : "";
}

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction() {
  //age saisi par l'utilisateur
  const age = ageElement.valueAsNumber;

  const categorie = retournerCategorie(age);
  if (!categorie) {
    categoryMessageElement.textContent = "Votre enfant est hors catégorie";
  }
  else {
    categoryMessageElement.textContent = `Votre enfant est dans la catégorie ${categorie}`;
  }
}
