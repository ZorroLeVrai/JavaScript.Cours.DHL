const paramListElement = document.getElementById("paramList");

updateListParameters();

function createListItem(title) {
  const itemElement = document.createElement("li");
  itemElement.textContent = title;
  paramListElement.appendChild(itemElement);
}

function updateListParameters() {
  const params = new URLSearchParams(window.location.search);
  for (let [key, value] of params.entries())
    createListItem(`${key}=${value}`);
}
