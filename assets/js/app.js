// OBTENER DIV DONDE SE MOSTRARA EL RESULTADO
let divResult = document.getElementById("result");

let ingresaJugada;
let cantidadJugadas = parseInt(prompt("Cuantas rondas desea jugar"));
// let seleccionUsuario = parseInt(prompt("ingrese su opcion"));

for (let i = 0; i < cantidadJugadas; i++) {
  do {
    ingresaJugada = prompt(
      "ingrese su jugada [Piedra], [Papel], [Tijeras]"
    ).toLowerCase();
  } while (
    ingresaJugada != "piedra" &&
    ingresaJugada != "papel" &&
    ingresaJugada != "tijeras"
  );
  play(ingresaJugada);
}

function play(jugadaUsuario) {
  let playpc = Math.floor(Math.random() * 3);
  switch (playpc) {
    case 0:
      playpc = "piedra";
      break;
    case 1:
      playpc = "papel";
      break;
    case 2:
      playpc = "tijeras";
      break;
  }
  // imp(jugadaUsuario, playpc, resultado);
  console.log(
    "usuario : " +
      jugadaUsuario +
      " pc: " +
      playpc +
      " Resultado: " +
      reglasJugadas(jugadaUsuario, playpc)
  );

  let pJugador = document.createElement("p");
  let pPc = document.createElement("p");
  let pResultado = document.createElement("p");
  let resultado = reglasJugadas(jugadaUsuario, playpc);

  pJugador.innerHTML = `<p>El Jugador eligio ${jugadaUsuario}</p>`;
  pPc.innerHTML = `<p>El PC eligio ${playpc}</p>`;
  pResultado.innerHTML = `<p>El Resultado es ${resultado}</p>`;
  divResult.append(pJugador);
  divResult.append(pPc);
  divResult.append(pResultado);
}

function reglasJugadas(parametroJugadaUsuario, parametroJugadaPC) {
  if (parametroJugadaUsuario === parametroJugadaPC) {
    return "Empate!";
  } else {
    switch (parametroJugadaPC) {
      case "papel":
        if (parametroJugadaUsuario === "tijeras") {
          return "Ganaste!";
        } else {
          return "Perdiste";
        }
      case "piedra":
        if (parametroJugadaUsuario === "papel") {
          return "Ganaste!";
        } else {
          return "Perdiste";
        }
      case "tijeras":
        if (parametroJugadaUsuario === "piedra") {
          return "Ganaste!";
        } else {
          return "Perdiste";
        }
    }
  }
}
