// OBTENER
let ingresaJugada
let cantidadJugadas = parseInt(prompt("Cuantas rondas desea jugar"));
// let seleccionUsuario = parseInt(prompt("ingrese su opcion"));

for (let i = 0; i < cantidadJugadas; i++) {
  do {
    ingresaJugada = prompt("ingrese su jugada [Piedra], [Papel], [Tijeras]").toLowerCase();
  } while (ingresaJugada != "piedra" && ingresaJugada != "papel" && ingresaJugada != "tijeras");
  play(ingresaJugada)
}

function play(jugadaUsuario){
    let playpc = Math.floor(Math.random()*3)
    switch (playpc) {
        case 0:
            playpc = "piedra"
            break
        case 1:
            playpc = "papel"
            break
        case 2:
            playpc = "tijeras"
            break
    }
    console.log("usuario : " + jugadaUsuario + " pc: " + playpc)
}
