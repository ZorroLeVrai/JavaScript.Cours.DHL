const jsonCategories = `[
  {"categoryName": "2 - 4", "ageMin": 2, "ageMax": 4},
  {"categoryName": "5 - 7", "ageMin": 5, "ageMax": 7},
  {"categoryName": "8 - 12", "ageMin": 8, "ageMax": 12},
  {"categoryName": "13 - 18", "ageMin": 13, "ageMax": 18}
]`;

const categories = JSON.parse(jsonCategories);

for (const category of categories) {
  console.log(`${category.categoryName} : ${category.ageMin} - ${category.ageMax}`);
}