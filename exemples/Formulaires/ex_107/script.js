const firstNameElement = document.getElementById("firstname");
const lastNameElement = document.getElementById("lastname");
const formElement = document.getElementById("myForm");

function fillForm() {
  firstNameElement.value = "John";
  lastNameElement.value = "Doe";
}

function initForm() {
  formElement.reset();
}