const temperature = 20;

if (temperature < 0) {
    //la condition est vraie
    console.log("Température inférieure à 0°C");
}
else if (temperature < 15){
    console.log("Froid");   
}
else if (temperature < 25){
    console.log("Tempéré");
}
else {
    console.log("Chaud");
}

console.log("Fin du programme");