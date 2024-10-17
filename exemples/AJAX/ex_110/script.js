const loadJsonButton = document.getElementById('loadJsonBtn');
const jsonResultElement = document.getElementById('jsonResult');

if (loadJsonButton && jsonResultElement) {
  loadJsonButton.addEventListener("click", fetchData);
}

function fetchData() {
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
        <h2>Erreur</h2>
        <p>${xhr.statusText}</p>`;
    }
  };

  xhr.onerror = function () {
    jsonResultElement.innerHTML = `
        <h2>Erreur</h2>
        <p>Erreur d'envoi de la réquête</p>`;
  }

  xhr.send();
}
