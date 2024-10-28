const jsonString = `
{
  "nom": "Alice",
  "age": 25,
  "profession": "Développeuse",
  "langages": ["JavaScript", "Python", "Java"]
}`;

const objet = JSON.parse(jsonString);

console.log(objet.nom); // "Alice"
console.log(objet.age); // 25
console.log(objet.profession); // "Développeuse"
console.log(objet.langages); // ["JavaScript", "Python", "Java"]
