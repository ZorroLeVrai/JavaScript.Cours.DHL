/**
 * EXERCICE 10 - Distributeur de boisson
 */

const choixElement = document.getElementById("choix");
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

  let boisson = "";
  switch (choixElement.value) {
    case "1":
      boisson = "eau";
      break;
    case "2":
      boisson = "jus d'orange";
      break;
    case "3":
      boisson = "limonade";
      break;
    case "4":
      boisson = "café";
      break;
    case "5":
      boisson = "thé";
      break;
    default:
      categoryMessageElement.textContent = "Votre choix n'est pas disponible";
      return;
  }

  categoryMessageElement.textContent = `Votre ${boisson} est servi(e)`;
}


