const firstNameElement = document.getElementById("firstname");
const lastNameElement = document.getElementById("lastname");
const submittedFirstNameElement = document.getElementById("submittedFirstName");
const submittedLastNameElement = document.getElementById("submittedLastName");
const formElement = document.getElementById("myForm");

formElement.addEventListener("submit", showUsername);

function showUsername(event) {
  const firstName = firstNameElement.value;
  const lastName = lastNameElement.value;
  event.preventDefault();

  if (firstName)
    submittedFirstNameElement.textContent = firstName;

  if (lastName)
    submittedLastNameElement.textContent = lastName;
}