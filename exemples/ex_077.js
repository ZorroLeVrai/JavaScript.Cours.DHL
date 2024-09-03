const nominateurStr = "12";
const denominateurStr = "4";
try {
  const nominateur = parseFloat(nominateurStr);
  const denominateur = parseFloat(denominateurStr);
  if (denominateur === 0)
    throw new Error("Le dénominateur ne peut être égal à 0");
  console.log(`Résultat: ${nominateur / denominateur}`);
}
catch (error) {
  console.log(`Erreur capturée: ${error.message}`);
}
finally {
  console.log("Fin du programme");
}
