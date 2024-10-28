const pets = ['cat', 'dog', 'bat', 'dog'];
console.log(pets.includes('cat'));    //true
console.log(pets.indexOf('dog'));     //1
console.log(pets.lastIndexOf('dog')); //3

console.log(pets.reverse());  //[ 'dog', 'bat', 'dog', 'cat' ]

//le tableau appelant la fonction reverse() est modifié
console.log(pets);  //[ 'dog', 'bat', 'dog', 'cat' ]
