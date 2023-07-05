const readline = require('readline-sync');

// Paso 2
function obtenerJugadaComputadora() {
  let opciones = ["piedra", "papel", "tijeras"];
  let resultado = (opciones[Math.floor(Math.random() * 3)]);
  return resultado;

}
obtenerJugadaComputadora();

// Paso 3
function obtenerJugadaUsuario() {
  const jugada = readline.question("Ingresa tu jugada (piedra, papel o tijeras): ");
  if(jugada === "piedra"|| jugada === "papel" || jugada === "tijeras"){
    let jugadaUsuario = jugada;

  }else{
  console.log("El caracter ingresado no es una opciones válida");
  }}


// Paso 4
function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

// Paso 5
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

// Paso 6
console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);

// extra
const readline = require('readline-sync');
const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';


const opciones = [PIEDRA, PAPEL, TIJERA];

const jugador = readline.question('Ingrese su jugada (piedra, papel o tijera): ');
const computadora = opciones[Math.floor(Math.random() * opciones.length)];

if (jugador === computadora) {
  console.log('Empate!');
} else if (
  (jugador === PIEDRA && computadora === TIJERA) ||
  (jugador === PAPEL && computadora === PIEDRA) ||
  (jugador === TIJERA && computadora === PAPEL)
) {
  console.log('¡Ganaste!');
} else {
  console.log('¡Perdiste!');
}
const numJugadas = parseInt(readline.question('Ingrese el número de jugadas deseadas: '));

let jugadorGanadas = 0;
let computadoraGanadas = 0;

for (let i = 0; i < numJugadas; i++) {
  console.log('--- Jugada ' + (i + 1) + ' ---');

  const jugador = readline.question('Ingrese su jugada (piedra, papel o tijera): ');
  const computadora = opciones[Math.floor(Math.random() * opciones.length)];


  // Resto del código de comparación y resultados

  // Actualizar el contador de ganadas
  if (jugador === computadora) {
    console.log('Empate!');
  } else if (
    (jugador === PIEDRA && computadora === TIJERA) ||
    (jugador === PAPEL && computadora === PIEDRA) ||
    (jugador === TIJERA && computadora === PAPEL)
  ) {
    console.log('¡Ganaste!');
    jugadorGanadas++;
  } else {
    console.log('¡Perdiste!');
    computadoraGanadas++;
  }
}

// Mostrar el resultado final del juego
console.log('--- Resultado Final ---');
console.log('Jugador ganó ' + jugadorGanadas + ' jugadas.');
console.log('Computadora ganó ' + computadoraGanadas + ' jugadas.');

if (jugadorGanadas > computadoraGanadas) {
  console.log('¡Felicidades! ¡Ganaste el juego!');
} else if (jugadorGanadas < computadoraGanadas) {
  console.log('¡La computadora ganó el juego!');
} else {
  console.log('¡Empate en el juego!');
}
