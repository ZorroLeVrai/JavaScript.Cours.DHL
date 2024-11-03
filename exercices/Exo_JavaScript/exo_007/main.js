/**
 * EXERCICE07 - Les Variables et Opérateurs Arithmétiques - Les Palindromes
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const loginElement = document.getElementById("login");
const passwordElement = document.getElementById("password");
const buttonExecuter = document.getElementById("executer");
const loginMessageElement = document.getElementById("login_message");

// Déclaration de constante
buttonExecuter.addEventListener("click", executerAction);

const login = "user1@example.com";
const mdp = "password123";

/**
 * Executer l'action
 * @param {MouseEvent} event
 */
function executerAction(event) {
  event.preventDefault();

  if (loginElement.value !== login) {
    loginMessageElement.textContent = "Le login est incorrect";
    return;
  }

  if (passwordElement.value !== mdp) {
    loginMessageElement.textContent = "Le mot de passe est incorrect";
    return;
  }

  loginMessageElement.textContent = "L'utilisateur est correctement connecté";
}
