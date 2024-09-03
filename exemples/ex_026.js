function lireArguments() {
  console.log(`le nombre d'arguments est ${arguments.length}`);
  //retourne un objet contenant les arguments de la fonction
  console.log(arguments);
  if (arguments.length > 0)
    //retourne la valeur du premier argument
    console.log(`Le premier argument est: ${arguments[0]}`);
}

lireArguments("Un", "Deux", "Trois");
//le nombre d'arguments est 3
//[Arguments] { '0': 'Un', '1': 'Deux', '2': 'Trois' }
//Le premier argument est: Un