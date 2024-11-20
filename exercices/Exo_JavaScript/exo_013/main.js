//EXERCICE 13 - Moyenne de 2 nombres

const nombre1Element = document.getElementById("nombre1");
const nombre2Element = document.getElementById("nombre2");
const categoryMessageElement = document.getElementById("categorie_message");


nombre1Element.addEventListener("input", calculerMoyenne);
nombre2Element.addEventListener("input", calculerMoyenne);

function calculerMoyenne() {
  const nombre1 = nombre1Element.valueAsNumber;
  const nombre2 = nombre2Element.valueAsNumber;

  if (!nombre1 || !nombre2) {
    categoryMessageElement.textContent = "";
    return;
  }

  const moyenne = (nombre1 + nombre2) / 2;
  categoryMessageElement.textContent = `La moyenne de ${nombre1} et ${nombre2} est : ${moyenne}`;
}