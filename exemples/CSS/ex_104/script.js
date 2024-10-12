// Accès à la feuille de style
const styleSheet = document.styleSheets[0]; // Première feuille de style
// Ajout d'une nouvelle règle CSS dynamiquement
styleSheet.insertRule('#myDiv3 { border: 5px solid black; }', styleSheet.cssRules.length);
