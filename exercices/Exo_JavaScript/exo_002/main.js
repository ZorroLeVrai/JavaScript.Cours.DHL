/**
 * EXERCICE02 - Les Variables et Opérateurs Arithmetiques - Les variables numériques
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultElement = document.querySelector('.result');

// Récupération et stockage des saisies utilisateur
const nb1 = Number(prompt("Saisir le premier nombre :"));

const nb2 = Number(prompt("Saisir le deuxième nombre :"));

// Addition des deux nombres
const resultat = nb1 + nb2;

const texteAAfficher = `<h3>Addition de deux variables numériques</h3>
<p>Vous avez saisi <b>${nb1}</b> </p>
<p>Vous avez saisi <b>${nb2}</b> </p>
<p>La somme de <b>${nb1}</b> + <b>${nb2}</b> = <b>${resultat}</b><hr><p>`;

// Injection du résultat dans l'element HTML .result
resultElement.innerHTML = `${texteAAfficher}`;