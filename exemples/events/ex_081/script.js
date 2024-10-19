const boutonPrincipal = document.getElementById("monBouton");
const elementMessage = document.getElementById("message");
const elementDiv = document.getElementById("monElement");

const boutonModifContenu = document.getElementById("modificationContenu");
const boutonModifEnfants = document.getElementById("modificationEnfants");
const boutonModifAttribut = document.getElementById("modificationAttribut");
const boutonAjoutClasse = document.getElementById("ajoutClasse");
const boutonModifCouleur = document.getElementById("modificationCouleur");

boutonModifContenu.addEventListener("click", () => {
  boutonPrincipal.textContent = "Cliquez-moi"
});

boutonModifEnfants.addEventListener("click", () => {
  elementDiv.innerHTML = "<p>Hello</p>";
})

boutonModifAttribut.addEventListener("click", () => {
  boutonPrincipal.setAttribute('onclick', "handleClick()");
  elementMessage.textContent = "L'action du bouton a été ajoutée";
});

boutonAjoutClasse.addEventListener("click", () => {
  boutonPrincipal.classList.add("round");
});

boutonModifCouleur.addEventListener("click", () => {
  boutonPrincipal.style.backgroundColor = "blue";
});

function handleClick() {
  alert("Le bouton a été cliqué");
}