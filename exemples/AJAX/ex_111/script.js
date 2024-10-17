const loadJsonButton = document.getElementById('loadJsonBtn');
const jsonResultElement = document.getElementById('jsonResult');

if (loadJsonButton && jsonResultElement) {
  loadJsonButton.addEventListener("click", fetchData);
}

async function fetchData() {
  try {
    // Utilisation de fetch avec await
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // Vérification si la réponse est correcte
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }

    // Extraction des données au format JSON
    const { title, body } = await response.json();

    // Mise à jour du DOM avec les données
    jsonResultElement.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
    `;
  } catch (error) {
    // Mise à jour du DOM avec le message d'erreur
    jsonResultElement.innerHTML = `
      <h2>Erreur</h2>
      <p>${error}</p>
    `;
  }
}
