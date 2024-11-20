//récupérer l'élément bouton
const buttonAction = document.getElementById("action");

buttonAction.addEventListener("click", executerAction);

function executerAction(event) {
    console.log("Bouton click");
    //console.log(event);
}