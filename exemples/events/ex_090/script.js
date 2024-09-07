const myListElement = document.getElementById("maListe");
const deleteAllButton = document.getElementById("supprimerTout");
deleteAllButton.addEventListener("click", removeAllElements);

for (let index = 0; index < 10; ++index) {
  addElement(index);
}

function addElement(index) {
  const listItemElement = document.createElement("li");
  listItemElement.textContent = `Element ${index}`;
  myListElement.appendChild(listItemElement);
  listItemElement.addEventListener("click", (event) => event.target.remove());
}

function removeAllElements() {
  while (myListElement.firstChild) {
    myListElement.removeChild(myListElement.lastChild);
  }
}
