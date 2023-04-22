// OBTENER
let cantidadJugadas = parseInt(prompt("Cuantas rondas desea jugar"));
// let seleccionUsuario = parseInt(prompt("ingrese su opcion"));

for (let i = 0; i < cantidadJugadas; i++) {
  do {
    let ingresaJugada = prompt(
      "ingrese su jugada [Piedra], [Papel], [Tijeras]"
    ).toLowerCase();
  } while (
    ingresaJugada == "Piedra" ||
    ingresaJugada == "Papel" ||
    ingresaJugada == "Tijeras"
  );
}
