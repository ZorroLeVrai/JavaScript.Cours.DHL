import { SecondaryNavBarData, NavigationLink, getDirectoryName } from "./helper.js";
import linkData from "./linkData.js";

const primaryNavbarElement = document.getElementById("primary-navbar");
const secondaryNavbarContainer = document.getElementById("secondary-navbar-container");
const documentSecondaryNavbarElements = document.getElementsByClassName("secondary-navbar");

addPrimaryLinks(linkData);
addSecondaryLinks(linkData);

const primaryNavLinks = document.querySelectorAll('#primary-navbar .nav-link');

/**
 * Génére les liens pour la secondary NavBar
 * @param {Map<string, SecondaryNavBarData>} links 
 */
function addSecondaryLinks(links) {
  for (const [key, value] of links) {
    const navbarId = `${key}-navbar`;
    const secondaryNavBarElement = document.createElement("nav");
    secondaryNavBarElement.id = navbarId;
    secondaryNavBarElement.className = "secondary-navbar remove";

    const { directory, links } = value;
    links.forEach(navigationLink => {
      const { tag, url } = navigationLink;

      // Create the anchor element
      const linkElement = document.createElement("a");

      // Set the attributes
      linkElement.href = `${directory}/${url}`;
      linkElement.className = "nav-link";

      // Set the text content
      linkElement.textContent = tag;
      linkElement.target = "contentFrame";

      linkElement.addEventListener('click', (event) => {
        const tagetedElement = event.target;
        if (!tagetedElement)
          return;

        const parentElement = tagetedElement.parentElement;
        const relatedLinks = parentElement.childNodes;
        relatedLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
      });

      secondaryNavBarElement.appendChild(linkElement);
    });

    secondaryNavbarContainer.appendChild(secondaryNavBarElement);
  }
}

/**
 * Met à jour le secondary Navbar actif
 * @param {string} activeSecondaryNavbar 
 */
function updateSecondaryNavbars(activeSecondaryNavbar) {
  const nbSecondaryNavbars = documentSecondaryNavbarElements.length;
  const activeId = `${activeSecondaryNavbar.toLowerCase()}-navbar`;
  for (let i = 0; i < nbSecondaryNavbars; ++i) {
    const currentElement = documentSecondaryNavbarElements[i];
    if (currentElement.id === activeId)
      currentElement.classList.remove("remove");
    else
      currentElement.classList.add("remove");
  }
}

/**
 * Gestion du click sur le primary NavBar
 * @param {PointerEvent} event 
 */
function manageActivePrimaryNavbar(event) {
  const targetElement = event.target;
  // Update active link styling
  primaryNavLinks.forEach(link => link.classList.remove('active'));
  targetElement.classList.add('active');

  updateSecondaryNavbars(targetElement.textContent);
}

/**
 * Retourne une liste de primary links
 * @param {Map<string, SecondaryNavBarData>} links
 * @returns {string[]} liste de primary links
 */
function getPrimaryDirectories(links) {
  const primaryLinks = [];
  for (const navBarItem of links.values()) {
    primaryLinks.push(navBarItem.directory);
  }
  return primaryLinks;
}

/**
 * Génére les liens pour la primary NavBar
 * @param {string[]} primaryLinks 
 */
function addPrimaryLinks(links) {
  const primaryDirectories = getPrimaryDirectories(links);

  primaryDirectories.forEach(primaryDirectory => {
    const linkName = getDirectoryName(primaryDirectory);

    // Create the anchor element
    const link = document.createElement("a");

    // Set the attributes
    link.href = "#";
    link.className = "nav-link";

    // Set the text content
    link.textContent = linkName;

    link.addEventListener('click', manageActivePrimaryNavbar);

    primaryNavbarElement.appendChild(link);
  });
}
