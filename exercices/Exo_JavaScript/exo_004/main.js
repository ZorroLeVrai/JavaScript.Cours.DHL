/**
 * EXERCICE04 - Les Variables et Opérateurs Arithmétiques - Les Palindromes
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
//input
const motElement = document.getElementById("mot");
const buttonExecuter = document.getElementById("executer");

//output
const motSaisiElement = document.getElementById("mot_saisi");
const motInverseElement = document.getElementById("mot_inverse");
const resultElement = document.getElementById("resultat_palindrome");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  // Récupération et stockage des saisies utilisateur
  const inputWord = motElement.value.toLowerCase();

  // Inversion du mot
  const reversedWord = inputWord.split("").reverse().join("");
  
  const isPalindrome = (inputWord === reversedWord);

  //Mise à jour de la page
  motSaisiElement.textContent = inputWord;
  motInverseElement.textContent = reversedWord;

  if (isPalindrome)
    resultElement.textContent = `Le mot ${inputWord} est un palindrome`;
  else
    resultElement.textContent = `Le mot ${inputWord} n'est pas un palindrome`;
}
