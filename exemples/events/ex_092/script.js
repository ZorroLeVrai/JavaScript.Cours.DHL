const parameterNameElement = document.getElementById("parameterName");
const parameterValueElement = document.getElementById("parameterValue");
const updateParameterButton = document.getElementById("updateParameter");

updateParameterButton.addEventListener("click", updateParameterAction);

function updateParameter(parameterName, parameterValue) {
  if (!parameterName)
    return;

  const params = new URLSearchParams(window.location.search);

  if (parameterValue)
    params.set(parameterName, parameterValue);
  else
    params.delete(parameterName);

  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

function updateParameterAction() {
  const parameterName = parameterNameElement.value;
  const parameterValue = parameterValueElement.value;

  updateParameter(parameterName, parameterValue);

  //initialiser les inputs
  parameterNameElement.value = "";
  parameterValueElement.value = "";
}