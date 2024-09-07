const actionButton = document.getElementById("action");
actionButton.addEventListener("click", handleAction);

function handleAction() {
  //Modification du texte de l'élément
  actionButton.textContent = "Merci d'avoir cliquer";
  //Désactivation du bouton
  actionButton.disabled = true;
  //Modification de la couleur de fond de l'élément
  actionButton.style.backgroundColor = "lightblue";
}