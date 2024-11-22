import { Task, TaskStatus, AjoutModificationStatus } from './tools.js';

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

//Affichage des tâches
const tachesAFaireElement = document.getElementById('liste_taches_a_faire');
const tachesEnCoursElement = document.getElementById('liste_taches_en_cours');
const tachesTermineElement = document.getElementById('liste_taches_terminees');

//Abonnement aux evenements
ajoutTacheElement.addEventListener('click', () => afficherAjoutMenu(AjoutModificationStatus.AJOUT));
modifierTacheElement.addEventListener('click', () => afficherAjoutMenu(AjoutModificationStatus.MODIFICATION));
supprimerTacheElement.addEventListener('click', afficherSuppressionMenu);

validerModificationTacheElement.addEventListener('click', validerModificationTache);
annulerModificationTacheElement.addEventListener('click', () => ajoutModificationTacheElement.classList.add('remove'));

validerSuppressionTacheElement.addEventListener('click', validerSuppressionTache);
annulerSuppressionTacheElement.addEventListener('click', () => suppressionTacheElement.classList.add('remove'));

let modeEditionMenu = AjoutModificationStatus.AJOUT;

/**
 * Retourne l'element parent pour le statut de la tache
 * @param {string} taskStatus 
 * @returns {HTMLElement | null} l'element parent pour le statut de la tache
 */
function obtenirElementParentPourStatut(taskStatus) {
  switch (taskStatus) {
    case TaskStatus.A_FAIRE:
      return tachesAFaireElement;
    case TaskStatus.EN_COURS:
      return tachesEnCoursElement;
    case TaskStatus.TERMINE:
      return tachesTermineElement;
    default:
      return null;
  }
}


/**
 * Afficher le menu d'ajout / modification de tache
 * @param {AjoutModificationStatus} mode Mode d'ajout ou de modification
 */
function afficherAjoutMenu(mode) {
  modeEditionMenu = mode;
  if (mode === AjoutModificationStatus.AJOUT)
    titreAjoutModificationElement.textContent = "Ajout d'une tache";
  else
    titreAjoutModificationElement.textContent = "Modification d'une tache";

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
  console.log(modeEditionMenu);
  ajoutModificationTacheElement.classList.add("remove");
  const tache = creerTacheDuFormulaire();
  ajouterTache(tache);

  initAjoutModificationTachesMenu();
}

/**
 * Ajoute une tache dans la bonne
 * @param {Task} task tache a ajouter
 */
function ajouterTache(task) {
  const tacheElement = creerElementTache(task);
  const parentElement = obtenirElementParentPourStatut(task.status);
  parentElement.appendChild(tacheElement);
}


/**
 * Retourne un nouvel élément du DOM pour une tache
 * @param {Task} task task à utiliser pour créer le nouvel élément du DOM
 * @returns {HTMLLIElement} nouvel élément du DOM
 */
function creerElementTache(task) {
  const taskIdStr = task.id.toString();

  const tacheElement = document.createElement("li");
  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.id = taskIdStr;
  const cbLabelElement = document.createElement("label");
  cbLabelElement.htmlFor = taskIdStr;
  cbLabelElement.textContent = task.title;

  tacheElement.setAttribute("data-id", task.id);
  tacheElement.appendChild(checkboxElement);
  tacheElement.appendChild(cbLabelElement);

  return tacheElement;
}

/**
 * Créer une tache a partir des informations du formulaire
 * @returns {Task} La tache creee a partir des informations du formulaire
 */
function creerTacheDuFormulaire() {
  const titre = nomTacheElement.value;
  const valeurStatut = statutTacheElement.value;
  const estUrgent = tacheUrgenteElement.checked;

  const statut = tacheStatutValeurVersStatus(valeurStatut);

  return new Task(titre, statut, estUrgent);
}

/**
 * Retourner le statut de la tache
 * @param {string} valeur valeur du statut de la tache dans le formulaire
 * @returns {Object} le statut de la tache
 */
function tacheStatutValeurVersStatus(valeur) {
  switch (valeur) {
    case "1":
      return TaskStatus.A_FAIRE;
    case "2":
      return TaskStatus.EN_COURS;
    case "3":
      return TaskStatus.TERMINE;
    default:
      return null;
  }
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
