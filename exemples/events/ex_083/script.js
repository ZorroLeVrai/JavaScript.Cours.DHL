const inputElement = document.getElementById("texte");
const outputElement = document.getElementById("output");

inputElement.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Enter") {
    outputElement.textContent = inputElement.value;
  }
}
