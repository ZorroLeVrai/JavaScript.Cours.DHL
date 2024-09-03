const Cote = Object.freeze({
  Pile: "Pile",
  Face: "Face"
});

const pieceCote = Cote.Face;
console.log(pieceCote === Cote.Face); //true
console.log(pieceCote); //Face
