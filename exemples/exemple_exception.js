"use strict";

class MonErreur extends Error {
    constructor(message) {
      super(message);
    }
  }

function diviser(nominateurStr, denominateurStr) {
    try {
        // const str = "Error";
        // const obj = JSON.parse(str);
        // console.log(obj);
        throw new MonErreur("Erreur personnalisée");

        const nominateur = parseFloat(nominateurStr);
        const denominateur = parseFloat(denominateurStr);
        console.log(`Résultat: ${nominateur / denominateur}`);
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`Erreur de syntaxe: ${error.message}`);
        }
        else {
            console.log(`Autre Erreur: ${error.message}`);
        }
    }
    finally {
        console.log("Fin du programme");
    }

    console.log("Fin de la fonction");
}

diviser("AZERTY", "0");