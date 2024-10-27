const afficher = (_, ...elements) => console.log(elements);
afficher(1, 2, 3);  //[2,3]

const [premier, ...rest] = [2, 3, 5, 7, 11];
console.log(premier);   //2
console.log(rest);      //[ 3, 5, 7, 11 ]
