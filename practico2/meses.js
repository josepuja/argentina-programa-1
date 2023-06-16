const readlineSync = require('readline-sync');
let meses = {1:"enero",2:"febrero",3:"marzo",4:"abril",5:"mayo",6:"junio",7:"julio",8:"agosto",9:"septiempbre",10:"octubre",11:"noviembre",12:"diciembre"};
const numeroMes = readlineSync.question('Ingresar un numero entero del 1 al 12 representando los meses de un anio?');
let nombreMes = meses[numeroMes];


let cantidadDeDias;
if (numeroMes == 2) {
  cantidadDeDias = 28;
} else if (numeroMes == 4 || numeroMes == 6 || numeroMes == 9 || numeroMes == 11) {
  cantidadDeDias = 30;
} else {
  cantidadDeDias = 31;
}


console.log("La cantidad de días del mes de " + nombreMes + " es " + cantidadDeDias);