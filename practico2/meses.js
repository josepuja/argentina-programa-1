const readline = require('readline-sync');

let meses = {1: "enero",2: "febrero",3: "marzo",4: "abril",5: "mayo",6: "junio", 7: "julio",8: "agosto",9: "septiembre",10: "octubre",11: "noviembre",12: "diciembre"};

const numero = parseInt(readline.question("Ingresa un numero del 1 al 12: "));

if (numero >= 1 && numero <= 12) {
    let cantidadDeDias;
    
    if (numero === 2) {
      cantidadDeDias = 28;
    } else if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
      cantidadDeDias = 30;
    } else {
      cantidadDeDias = 31;
    }
    console.log(`La cantidad de días del mes de ${meses[numero]} es ${cantidadDeDias}`);
  }
  