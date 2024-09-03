const tableau = [10, 7, 18, 2, 65];
tableau.sort()
console.log(tableau);  //[ 10, 18, 2, 65, 7 ]

tableau.sort((a, b) => a - b);
console.log(tableau);  //[ 2, 7, 10, 18, 65 ]
