//practica con if

function juegoVsPlayer2() {
    var player1 = prompt("Player 1: Ingresa piedra, papel o tijera");
    var player2 = prompt("Player 2: Ingresa piedra, papel o tijera");


    if (player1 == "piedra" && player2 == "tijera" || player1 == "tijera" && player2 == "papel" || player1 ==
        "papel" && player2 == "piedra") {
        alert("Gano Player1 !!! - Player1: " + player1 + " - Player2: " + player2)
    } else if (player2 == "piedra" && player1 == "tijera" || player2 == "tijera" && player1 == "papel" || player2 ==
        "papel" && player1 == "piedra") {
        alert("Gano Player2 !!! - Player1: " + player1 + " - Player2: " + player2)
    } else if (player1 == "piedra" && player2 == "piedra" || player1 == "tijera" && player2 == "tijera" ||
        player1 == "papel" && player2 == "papel") {
        alert("Empataron! Ninguno gano xD - Player1: " + player1 + " - Player2: " + player2)
    } else {
        alert("Alguien escribio algo mal :6 - Player1 escribio:" + player1 + " - Player2 escribio:" + player2)
    }

}

function jugadaCpu() {
    var opcion = ["piedra", "papel", "tijera"];
    var numero = Math.floor(Math.random() * 3)
    return opcion[numero];
}

//practica con if
function JuegoVsPcIf() {
    var miJugada = prompt("Player 1: Ingresa piedra, papel o tijera");
    var cpu = jugadaCpu();

    if (miJugada == "piedra" && cpu == "tijera" || miJugada == "tijera" && cpu == "papel" || miJugada == "papel" &&
        cpu == "piedra") {
        alert("Gane yo !" + "Mi jugada: " + miJugada + "CPU: " + cpu)
    } else if (cpu == "piedra" && miJugada == "tijera" || cpu == "tijera" && miJugada == "papel" || cpu ==
        "papel" && miJugada == "piedra") {
        alert("Gano cpu !" + "Mi jugada: " + miJugada + "CPU: " + cpu)
    } else if (miJugada == "piedra" && cpu == "piedra" || miJugada == "tijera" && cpu == "tijera" || miJugada ==
        "papel" && cpu == "papel") {
        alert("Empataron! Ninguno gano xD " + "Mi jugada: " + miJugada + "CPU: " + cpu)
    } else {
        alert("Esta opcion no es valida :6" + "Yo escribi:" + miJugada + " - cpu dijo:" + cpu)
    }

}
//practica con switch
function JuegoVsPcSwitch() {
    var player1 = prompt("Player 1: Ingresa piedra, papel o tijera");
    var cpu = jugadaCpu();
    switch (player1) {
        case "piedra":
            if (cpu == "papel") {
                alert("Gano cpu !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else if (cpu == "tijera") {
                alert("Gano Player1 !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else {
                alert("Empataron! Ninguno gano xD " + "Player1: " + player1 + "CPU: " + cpu)
            }
            break;
        case "papel":
            if (cpu == "tijera") {
                alert("Gano cpu !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else if (cpu == "piedra") {
                alert("Gano Player1 !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else {
                alert("Empataron! Ninguno gano xD " + "Player1: " + player1 + "CPU: " + cpu)
            }
            break;
        case "tijera":
            if (cpu == "piedra") {
                alert("Gano cpu !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else if (cpu == "papel") {
                alert("Gano Player1 !" + "<br>" + "PLayer1: " + player1 + "CPU: " + cpu)
            } else {
                alert("Empataron! Ninguno gano xD " + "Player1: " + player1 + "CPU: " + cpu)
            }
            break;
        default:
            alert("Esta opcion no es valida :6 - " + "<br>" + "PLayer1 escribio:" + player1 + " - cpu escribio:" +
                cpu)
    }
}