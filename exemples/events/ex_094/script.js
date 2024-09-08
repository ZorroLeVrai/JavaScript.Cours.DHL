const sessionCookieButton = document.getElementById("sessionCookie");
const persistentCookieButton = document.getElementById("persistentCookie");
const deleteCookieButton = document.getElementById("deleteCookie");
const cookieValueElement = document.getElementById("cookieValue");

function readCookieValue() {
  //lit le contenu du cookie
  cookieValueElement.textContent = document.cookie ?? "Pas de données";
}

readCookieValue();

sessionCookieButton.addEventListener("click", () => {
  // Crée un cookie de session
  document.cookie = "type=session";
  readCookieValue();
});

persistentCookieButton.addEventListener("click", () => {
  // Crée un cookie persistant avec une durée de vie de 7 jours 
  maxAge = 7 * 24 * 60 * 60;
  document.cookie = `type=persistant; max-age=${maxAge}; path=/;`;
  readCookieValue();
});

deleteCookieButton.addEventListener("click", () => {
  // Supprime la valeur d'un cookie
  document.cookie = "type=; max-age=0; path=/;";
  readCookieValue();
});
