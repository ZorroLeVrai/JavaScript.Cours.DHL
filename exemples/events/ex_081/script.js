const boutonPrincipal = document.getElementById("monBouton");
const elementMessage = document.getElementById("message");

const boutonModifContenu = document.getElementById("modificationContenu");
const boutonModifAttribut = document.getElementById("modificationAttribut");
const boutonAjoutClasse = document.getElementById("ajoutClasse");
const boutonModifCouleur = document.getElementById("modificationCouleur");

boutonModifContenu.addEventListener("click", () => {
  boutonPrincipal.textContent = "Cliquez-moi"
});

boutonModifAttribut.addEventListener("click", () => {
  boutonPrincipal.setAttribute('onclick', "handleClick()");
  elementMessage.textContent = "L'action du bouton a été ajoutée";
});

boutonAjoutClasse.addEventListener("click", () => {
  boutonPrincipal.classList.add("round");
});

boutonModifCouleur.addEventListener("click", () => {
  boutonPrincipal.style.backgroundColor = 'orange';
});

function handleClick() {
  alert("Le bouton a été cliqué");
}