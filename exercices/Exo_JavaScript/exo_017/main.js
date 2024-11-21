const ajoutTacheElement = document.getElementById('ajouter_tache');
const modifierTacheElement = document.getElementById('modifier_tache');
const supprimerTacheElement = document.getElementById('supprimer_tache');

// Menu ajout modification taches
const ajoutModificationTacheElement = document.getElementById('ajout_modification_taches');
const titreAjoutModificationElement = document.getElementById('titre_ajout_modification');
const nomTacheElement = document.getElementById('nom_tache');
const statutTacheElement = document.getElementById('statut_tache');
const tacheUrgenteElement = document.getElementById('tache_urgente');
const validerModificationTacheElement = document.getElementById('valider_modification_tache');
const annulerModificationTacheElement = document.getElementById('annuler_modification_tache');

// Menu suppression taches
const suppressionTacheElement = document.getElementById('suppression_taches');
const validerSuppressionTacheElement = document.getElementById('valider_suppression_tache');
const annulerSuppressionTacheElement = document.getElementById('annuler_suppression_tache');

//Abonnement aux evenements
ajoutTacheElement.addEventListener('click', () => afficherAjoutMenu("Ajout d'une tache"));
modifierTacheElement.addEventListener('click', () => afficherAjoutMenu("Supperession d'une tache"));
supprimerTacheElement.addEventListener('click', afficherSuppressionMenu);

validerModificationTacheElement.addEventListener('click', validerModificationTache);
annulerModificationTacheElement.addEventListener('click', () => ajoutModificationTacheElement.classList.add('remove'));

validerSuppressionTacheElement.addEventListener('click', validerSuppressionTache);
annulerSuppressionTacheElement.addEventListener('click', () => suppressionTacheElement.classList.add('remove'));

/**
 * Afficher le menu d'ajout / modification de tache
 * @param {string} titreMenu Titre du menu
 */
function afficherAjoutMenu(titreMenu) {
  titreAjoutModificationElement.textContent = titreMenu;
  ajoutModificationTacheElement.classList.remove("remove");
}

/**
 * Afficher le menu de suppression de tache
 */
function afficherSuppressionMenu() {
  suppressionTacheElement.classList.remove("remove");
}

/**
 * Valider l'ajout / la modification de la tache
 */
function validerModificationTache() {
  ajoutModificationTacheElement.classList.add("remove");
  initAjoutModificationTachesMenu();
}

/**
 * Valider la suppression de la tache
 */
function validerSuppressionTache() {
  suppressionTacheElement.classList.add("remove");
}

/**
 * Initialisation du menu ajout / modification de taches
 */
function initAjoutModificationTachesMenu() {
  nomTacheElement.value = "";
  statutTacheElement.value = "En cours";
  tacheUrgenteElement.checked = false;
}
