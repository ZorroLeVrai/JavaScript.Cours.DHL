const newPageButton = document.getElementById("newPage");
const backButton = document.getElementById("back");
const pageIdElement = document.getElementById("pageId");

newPageButton.addEventListener("click", handleNewPage);
backButton.addEventListener("click", handleBackButton);
//événement déclenché lorsque l'utilisateur navigue dans l'historique
window.addEventListener('popstate', retrieveState);

let pageNumber = 0;

function updatePageNumber(pageNum) {
  pageNumber = pageNum;
  pageIdElement.textContent = pageNum;
}

function handleNewPage() {
  updatePageNumber(pageNumber + 1);
  //Ajoute une nouvelle entrée dans l'historique
  //Le 1er argument sert à associer une donnée à la page d'historique
  history.pushState({ page: pageNumber }, "", `?page=${pageNumber}`);
}

function handleBackButton() {
  //retourne à la page précédente
  history.back();
}

function retrieveState(event) {
  //recupère la donnée associée à l'historique
  const historyState = event.state;
  if (historyState)
    updatePageNumber(historyState.page);
}
