/**
 * Exercice 01 - VARIABLES - Les variables type chaines
 */

// Création d'une constante
const resultElement = document.querySelector('.result');

// recupération des saisies utilisateur
const prenom = prompt("Veuillez saisir votre prénom");
const nom = prompt("Veuillez saisir votre nom");

// Addition des deux variables string
const resultat = `${prenom} ${nom}`;

const texteAAfficher = `<h3> Addition de deux variables de type chaine </h3>
<p>Votre prénom : <b>${prenom}</b></p>
<p>Votre nom : <b>${nom}</b></p>
<p>Bonjour <b>${resultat}</b><p>`;

// Patch des résultats dans le DOM
resultElement.innerHTML += texteAAfficher;
