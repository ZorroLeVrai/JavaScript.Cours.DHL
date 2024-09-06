const newPageButton = document.getElementById("newPage");
const backButton = document.getElementById("back");
const pageIdElement = document.getElementById("pageId");

newPageButton.addEventListener("click", handleNewPage);
backButton.addEventListener("click", handleBackButton);
//événement déclenché lorsque l'utilisateur navigue dans l'historique
window.addEventListener('popstate', updatePageId);

let pageNumber = 1;

function handleNewPage() {
  //Ajoute une nouvelle entrée dans l'historique
  history.pushState({ page: pageNumber }, `page ${pageNumber}`, `?page=${pageNumber}`);
  ++pageNumber;
  updatePageId();
}

function handleBackButton() {
  //retourne à la page précédente
  history.back();
}

function updatePageId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pageId = urlParams.get("page");
  pageIdElement.textContent = pageId ?? "Pas d'identifiant";
}
