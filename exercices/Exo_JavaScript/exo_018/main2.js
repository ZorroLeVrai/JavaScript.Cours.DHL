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
const categories = JSON.parse(jsonCategories, categoryReviver);
//displayCategories(categories);

/**
 * Reviver pour les catégories
 * @param {string} key 
 * @param {*} value 
 * @returns 
 */
function categoryReviver(key, value) {
  if (isNaN(parseInt(key)))
    return value;

  if (value instanceof Object && "categoryName" in value) {
    const { categoryName, ageMin, ageMax } = value;
    return new CategoryData(categoryName, ageMin, ageMax);
  }

  return value;
}

/**
 * Affiche les catégories
 * @param {object[]} mesCategories 
 */
function displayCategories(mesCategories) {
  mesCategories.forEach(category => console.log(category.toString()));
}


/**
 * Retourne la catégorie de l'enfant en fonction de son age
 * @param {number} age 
 * @returns {string} la catégorie de l'enfant
 */
function retournerCategorie(age) {
  const categoryObj = categories.find(category => category.contains(age));
  return categoryObj ? categoryObj.categoryName : "";
}

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();
  const age = ageElement.valueAsNumber;

  const categorie = retournerCategorie(age);
  if (!categorie) {
    categoryMessageElement.textContent = "Votre enfant est hors catégorie";
  }
  else {
    categoryMessageElement.textContent = `Votre enfant est dans la catégorie ${categorie}`;
  }
}
