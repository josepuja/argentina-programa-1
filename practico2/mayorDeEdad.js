const readline = require('readline-sync');

const edad = readline.question("Ingresa tu edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}