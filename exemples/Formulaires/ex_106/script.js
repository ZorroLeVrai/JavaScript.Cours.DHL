const firstNameElement = document.getElementById("firstname");
const lastNameElement = document.getElementById("lastname");
const submittedFirstNameElement = document.getElementById("submittedFirstName");
const submittedLastNameElement = document.getElementById("submittedLastName");

function showUsername() {
  const firstName = firstNameElement.value;
  const lastName = lastNameElement.value;

  if (firstName)
    submittedFirstNameElement.textContent = firstName;

  if (lastName)
    submittedLastNameElement.textContent = lastName;
}