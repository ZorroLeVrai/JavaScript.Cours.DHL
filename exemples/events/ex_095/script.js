const parameterNameElement = document.getElementById("parameterName");
const parameterValueElement = document.getElementById("parameterValue");
const updateCookieParameterButton = document.getElementById("updateCookieParameter");
const readCookieButton = document.getElementById("readCookie");
const cookieContentElement = document.getElementById("cookieContent");

updateCookieParameterButton.addEventListener("click", updateParameterHandler);
readCookieHandler();

function updateParameterHandler() {
  const parameterName = parameterNameElement.value;
  const parameterValue = parameterValueElement.value;
  if (!parameterName)
    return;

  if (parameterValue) {
    //update a cookie value
    document.cookie = `${parameterName}=${parameterValue}`;
  } else {
    //delete a cookie value
    document.cookie = `${parameterName}=; max-age=0; path=/;`;
  }
  readCookieHandler();
}

function readCookieHandler() {
  const cookieContent = document.cookie ?? "Pas de données";
  cookieContentElement.textContent = cookieContent;
}


function getCookie(name) {
  const cookies = document.cookie.split(';'); // Séparer les cookies
  const cookieName = name + "=";

  for (let cookie of cookies) {
    // Supprimer les espaces blancs
    cookie = cookie.trim();
    if (cookie.startsWith(cookieName)) {
      return cookie.substring(cookieName.length, cookie.length); // Retourner la valeur du cookie
    }
  }
  // Si le cookie n'existe pas
  return null;
}
