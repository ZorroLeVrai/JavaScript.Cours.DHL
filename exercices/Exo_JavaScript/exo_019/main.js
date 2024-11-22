const postIdElement = document.getElementById('postid');
const idElement = document.getElementById('id');
const executerBoutonElement = document.getElementById('executer');
const resultElement = document.getElementById('result');

executerBoutonElement.addEventListener('click', effectuerRequete);

async function effectuerRequete() {
  const postId = postIdElement.value;
  const id = idElement.value;

  const url = creerUrl(postId, id);
  const data = await recupererDonnees(url);
  afficherResultat(data);
}


/**
 * Affichage des données récupérées
 * @param {Object} comments les données récupérées
 */
function afficherResultat(comments) {
  resultElement.innerHTML = '';

  if (comments.length === 0) {
    resultElement.textContent = 'Aucun résultat';
    return;
  }

  for (const comment of comments) {
    const commentTable = creerTableau(comment);
    resultElement.appendChild(commentTable);
  }
}


function creerTableau(comment) {
  // Créer le tableau
  const table = document.createElement("table");

  // Créer le corps du tableau
  const tbody = document.createElement("tbody");

  // Parcourir les entrées de l'objet data et ajouter les lignes
  Object.entries(comment).forEach(([key, value]) => {
    const row = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = key;

    const td = document.createElement("td");
    td.textContent = value;

    row.appendChild(th);
    row.appendChild(td);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

/**
 * Créer l'URL de l'API à partir des paramètres
 * @param {string} postId 
 * @param {string} id 
 * @returns {string} URL de l'API
 */
function creerUrl(postId, id) {
  let url = `https://jsonplaceholder.typicode.com/comments`;

  const params = [];
  if (postId) {
    params.push(`postId=${postId}`);
  }
  if (id) {
    params.push(`id=${id}`);
  }

  if (params.length > 0) {
    url += '?' + params.join('&');
  }

  return url;
}


/**
 * Récupérer les données de l'API à partir de l'URL
 * @param {string} url 
 * @returns {Promise} Données récupérées
 */
async function recupererDonnees(url) {
  // Effectuer la requête avec Fetch
  const response = await fetch(url);

  // Vérifier si la réponse est réussie
  if (!response.ok) {
    throw new Error(`Erreur HTTP - Status: ${response.status}`);
  }

  // Extraire les données JSON
  const data = await response.json();
  return data;
}