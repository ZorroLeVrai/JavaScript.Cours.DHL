const userNameElement = document.getElementById("username");
const countryElement = document.getElementById("country");
const form = document.getElementById('myForm');

// Événement 'input' sur le champ de texte
userNameElement.addEventListener('input', function () {
  console.log("Nom d'utilisateur modifié :", this.value);
});

// Événement 'change' sur la sélection de pays
countryElement.addEventListener('change', function () {
  console.log("Pays sélectionné :", this.value);
});

// Événement 'submit' sur le formulaire
form.addEventListener('submit', function (event) {
  event.preventDefault();  // Empêche l'envoi du formulaire
  console.log("Formulaire soumis !");
});