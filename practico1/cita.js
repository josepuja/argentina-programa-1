let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %s", tamañoDeCita); 
let indice = cita.indexOf(substring);
console.log("El indice del substring es:%s", indice);
let citaReservada = cita.slice(0,indice) + substring.slice(0,substring.length -0);
console.log(citaReservada);