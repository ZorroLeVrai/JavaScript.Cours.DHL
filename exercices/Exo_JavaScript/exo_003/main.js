/**
 * EXERCICE 03 - Les Variables et Opérateurs Arithmétiques - L'objet Math en Javascript
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const piElement = document.getElementById("pi");
const perimetreElement = document.getElementById("perimetre");
const perimetreArrondiElement = document.getElementById("perimetre_arrondi");
const aireElement = document.getElementById("aire");
const aireArrondiElement = document.getElementById("aire_arrondi");

// Déclaration de constante
const pi = Math.PI;

//calculs
diametre = Number(prompt("Veuillez saisir le diamètre du cercle"));
perimetre = diametre * pi;
aire = pi * Math.pow((diametre / 2), 2);

//Mise à jour des éléments HTML
piElement.textContent = pi;
perimetreElement.textContent = perimetre;
perimetreArrondiElement.textContent = Math.round(perimetre, 2);
aireElement.textContent = aire;
aireArrondiElement.textContent = Math.round(aire, 2);
