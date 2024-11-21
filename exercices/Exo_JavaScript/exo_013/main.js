//EXERCICE 13 - Moyenne de 2 nombres

const nombre1Element = document.getElementById("nombre1");
const nombre2Element = document.getElementById("nombre2");
const categoryMessageElement = document.getElementById("categorie_message");


nombre1Element.addEventListener("input", afficherMoyenne);
nombre2Element.addEventListener("input", afficherMoyenne);

function afficherMoyenne() {
  const nombre1 = nombre1Element.valueAsNumber;
  const nombre2 = nombre2Element.valueAsNumber;

  if (!nombre1 || !nombre2) {
    categoryMessageElement.textContent = "";
    return;
  }

  const moyenne = calculerMoyenne(nombre1, nombre2);
  categoryMessageElement.textContent = `La moyenne de ${nombre1} et ${nombre2} est : ${moyenne}`;
}


/**
 * Calcule la moyenne de 2 nombres
 * @param {number} nombre1 
 * @param {number} nombre2 
 * @returns {number} La moyenne de 2 nombres
 */
function calculerMoyenne(nombre1, nombre2) {
  return (nombre1 + nombre2) / 2;
}