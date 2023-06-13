const readlineSync = require('readline-sync');
const edad = readlineSync.question('Cuantos anios tienes? ');
console.log('Tu edad es: %i', edad);
if (edad >= 18 )
console.log("eres mayor de edad");
else console.log("eres menor de edad");