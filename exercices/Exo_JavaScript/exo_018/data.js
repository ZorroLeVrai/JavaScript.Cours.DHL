/**
 * Données concernant une catégorie
 */
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

  /**
   * Retourne vrai si l'age est dans la catégorie
   * @param {number} age Age de l'enfant
   * @returns {boolean} Vrai si l'age est dans la catégorie
   */
  contains(age) {
    return age >= this.ageMin && age <= this.ageMax;
  }

  toString() {
    return `${this.categoryName} [${this.ageMin} - ${this.ageMax}]`;
  }
}

export const jsonCategories = `[
  {"categoryName": "2 - 4", "ageMin": 2, "ageMax": 4},
  {"categoryName": "5 - 7", "ageMin": 5, "ageMax": 7},
  {"categoryName": "8 - 12", "ageMin": 8, "ageMax": 12},
  {"categoryName": "13 - 18", "ageMin": 13, "ageMax": 18}
]`;
