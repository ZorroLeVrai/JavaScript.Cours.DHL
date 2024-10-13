const formElement = document.getElementById("myForm");
const errorElement = document.getElementById("error");

formElement.addEventListener("submit", submitForm);

function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    return "L'email est obligatoire";
  } else if (!emailRegex.test(email)) {
    return "Veuillez entrer une adresse email valide.";
  }

  if (password.length < 6) {
    return "Le mot de passe doit contenir au moins 6 caractères";
  }

  return "";
}

function submitForm(event) {
  const erreurValidation = validateForm();

  if (erreurValidation) {
    event.preventDefault();
    errorElement.textContent = erreurValidation;
  } else {
    errorElement.textContent = "Formulaire valide";
  }
}