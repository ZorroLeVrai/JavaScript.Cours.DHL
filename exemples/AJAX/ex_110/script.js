const loadJsonButton = document.getElementById('loadJsonBtn');
const jsonResultElement = document.getElementById('jsonResult');

if (loadJsonButton && jsonResultElement) {
  loadJsonButton.addEventListener("click", handleClickLoadJson);
}

function handleClickLoadJson() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      // Conversion de la réponse texte en objet JSON
      const { title, body } = JSON.parse(xhr.responseText);
      jsonResultElement.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>`;
    } else {
      //En cas d'erreur
      jsonResultElement.innerHTML = `
        <h2>Error</h2>
        <p>${xhr.responseText}</p>`;
    }
  };

  xhr.send();
}
