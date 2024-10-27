const firstNameElement = document.getElementById("prenom");
const lastNameElement = document.getElementById("nom");
const formElement = document.getElementById("myForm");
const fillFormButtonElement = document.getElementById("fillFormButton");
const initFormButtonElement = document.getElementById("initFormButton");

fillFormButtonElement.addEventListener("click", fillForm);
initFormButtonElement.addEventListener("click", initForm);

function fillForm() {
  firstNameElement.value = "John";
  lastNameElement.value = "Doe";
}

function initForm() {
  formElement.reset();
}