const addButtonElement = document.getElementById("ajoutBouton");
const myListElement = document.getElementById("maListe");
let nbElements = 0;

addButtonElement.addEventListener("click", handleAddElement);

function handleAddElement() {
  const newListItem = document.createElement("li");
  newListItem.textContent = `Element n°${++nbElements}`;
  myListElement.appendChild(newListItem);
}
