//EXERCICE 15 - Affichage des éléments FizzBuzz

const FIZZ_BUZZ_MAX = 10000;

const nombreMaxElement = document.getElementById("nombre_max");
const buttonExecuter = document.getElementById("executer");
const fizzBuzzElement = document.getElementById("fizz_buzz");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Exécuter l'action principale
 */
function executerAction() {
  const nombreMax = nombreMaxElement.valueAsNumber;

  if (nombreMax > FIZZ_BUZZ_MAX) {
    alert(`Le nombre maximum doit être inférieur ou égal à ${FIZZ_BUZZ_MAX}`);
    return;
  }

  const fizzBuzz = creerFizzBuzz(nombreMax);
  creerElementsFizzBuzz(fizzBuzz);
}

/**
 * créer les éléments Fizz Buzz
 * @param {number} nombreMax Nombre maximum pour le Fizz Buzz
 * @returns {string[]} Liste des éléments Fizz Buzz
 */
function creerFizzBuzz(nombreMax) {
  const fizzBuzz = [];
  for (let i = 1; i <= nombreMax; i++) {
    fizzBuzz.push(getFizzBuzzElement(i));
  }
  return fizzBuzz;
}


function getFizzBuzzElement(i) {
  let element = "";
  if (i % 3 === 0) {
    element += "Fizz";
  }
  if (i % 5 === 0) {
    element += "Buzz";
  }
  return element || i;
}

/**
 * Créer les éléments FizzBuzz
 * @param {string[]} fizzBuzz Liste des éléments FizzBuzz
 */
function creerElementsFizzBuzz(fizzBuzz) {
  // Supprimer les éléments existants
  fizzBuzzElement.innerHTML = "";

  for (let i = 0; i < fizzBuzz.length; i++) {
    const element = document.createElement("li");
    element.textContent = fizzBuzz[i];
    fizzBuzzElement.appendChild(element);
  }
}