export const jsonCategories = `[
  {"categoryName": "2 - 4", "ageMin": 2, "ageMax": 4},
  {"categoryName": "5 - 7", "ageMin": 5, "ageMax": 7},
  {"categoryName": "8 - 12", "ageMin": 8, "ageMax": 12},
  {"categoryName": "13 - 18", "ageMin": 13, "ageMax": 18}
]`;

export class CategoryData {
  /**
   * @param {string} categoryName Nom de la catégorie
   * @param {number} ageMin Age minimum
   * @param {number} ageMax Age maximum */
  constructor(categoryName, ageMin, ageMax) {
    this.categoryName = categoryName;
    this.ageMin = ageMin;
    this.ageMax = ageMax;
  }

  toString() {
    return `${this.categoryName} [${this.ageMin} - ${this.ageMax}]`;
  }
}

// Parse the JSON data into instances of CategoryData
const categories = JSON.parse(jsonCategories, (key, value) => {
  if (typeof value === "object" && value !== null && "categoryName" in value) {
    // Convert object into CategoryData instance
    return new CategoryData(value.categoryName, value.ageMin, value.ageMax);
  }
  return value; // Return the value as-is for other keys
});

// Test output
categories.forEach(category => console.log(category.toString()));
