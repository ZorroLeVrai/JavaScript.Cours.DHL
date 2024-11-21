export class Tranche {
  /**
   * @param {number} seuil Seuil de la tranche
   * @param {number} taux Taux de la tranche
   */
  constructor(seuil, taux) {
    this.seuil = seuil;
    this.taux = taux;
  }
}

export const tranches = [
  new Tranche(11294, 0),
  new Tranche(28797, 0.11),
  new Tranche(82341, 0.3),
  new Tranche(177106, 0.41),
  new Tranche(Number.MAX_VALUE, 0.45)
];