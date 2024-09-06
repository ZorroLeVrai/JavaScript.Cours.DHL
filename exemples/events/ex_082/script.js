const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

parentElement.addEventListener('click', () => console.log("Element Parent - Capturing Phase"), true);
parentElement.addEventListener('click', () => console.log("Element Parent - Bubbling Phase"));

childElement.addEventListener('click', () => console.log("Element Child - Capturing Phase"), true);
childElement.addEventListener('click', () => console.log("Element Child - Bubbling Phase"));
