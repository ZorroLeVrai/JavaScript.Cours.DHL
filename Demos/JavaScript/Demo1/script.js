const nomElement = document.getElementById("nom");
const prenomElement = document.getElementById("prenom");
const buttonExecuter = document.getElementById("executer");
const resultatElement = document.getElementById('resultat');

buttonExecuter.addEventListener("click", executerAction);

function executerAction() {
    const nom = nomElement.value;
    const prenom = prenomElement.value;
    const resultat = prenom + " " + nom;
    resultatElement.textContent = resultat;
}