const submittedFirstNameElement = document.getElementById("submittedFirstName");
const submittedLastNameElement = document.getElementById("submittedLastName");

const formElement = document.getElementById("myForm");
formElement.addEventListener("submit", showUsername);

function showUsername(event) {
  //l'action par défaut ne doit pas être exécutée
  event.preventDefault();

  //récupération des champs du formulaire
  const { firstname: firstNameElement, lastname: lastNameElement } = formElement.elements;

  //Mis à jour des champs
  submittedFirstNameElement.textContent = `Prénom: ${firstNameElement.value}`;
  submittedLastNameElement.textContent = `Nom: ${lastNameElement.value}`;
}