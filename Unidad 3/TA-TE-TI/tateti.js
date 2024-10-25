//traigo todas las casillas y agrego un eventListener a cada una
let casillas=document.getElementsByClassName("casilla")
for (let i = 0; i < casillas.length; i++) {
    casillas[i].addEventListener("click", ()=>movimiento(i));
}
let mostrarModo=document.getElementById("mostrarModo");//h2 muestra en que modo se esta jugando
let mostrarTurno=document.getElementById("mostrarTurno");//h2 muestra de quien es el turno
let botonModoJuego=document.getElementById("modo");//boton para cambiar el modo

//declaracion de varibles necesarias
let tablero = [];//creo el  tablero(arreglo) para manejar la logica
let filas = 3;
let columnas = 3;
let contadorFichas;//verificar si el tablero esta lleno para no recorrerlo todo
let juegoEnCurso;//nadie gana y no hay empate
let ganador;//para mostrar que jugador ganó(o empate)
let jugador = "X";//jugador que le corresponde el turno
let modoJuego="Un jugador"//empieza en modo un jugador(contra la maquina)


function inicializar() {
    //inicio el estado del juego
    juegoEnCurso = true;
    ganador = "";
    contadorFichas = 0;
    jugador = "X";
    
    mostrarTurno.innerHTML = "Turno de: " + jugador;//muestro de quién es el turno

    //reinicio el tablero(arreglo)
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = "";
        }
    }
    
    //limpio las casillas  del tablero visualmente
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].textContent = "";
    }
}


//funcion principal, realiza el movimiento del jugador
function movimiento(i) {
    if (juegoEnCurso==false) {
        if (ganador!="") {
            window.alert("Ganador: "+ganador)
        } else {
            window.alert("¡Hay empate!")
        }
        return //se detiene la ejecucion e impide movimientos 
    }
    else{
        if(jugador=="X"){//le toca a "X"
            //calulo fila y columna para insertar "X"
            let fila=Math.floor(i/3)
            let columna=i%3

            if (tablero[fila][columna]==""){ //si esta disponible
                casillas[i].innerHTML=jugador//muestro en tablero de la pagina
                tablero[fila][columna]=jugador//inserto en arreglo (tablero)
                contadorFichas+=1
                jugador="O"//cambio de jugador
                mostrarTurno.innerHTML="Turno de: "+jugador
                continuarJuego()//verifico si debe continuar el juego

                //si se juega con la maquina
                if (modoJuego=="Un jugador") {
                    //espro 800 ms para ejecutar la jugada de la maquina
                    setTimeout(() => {
                        movimiento(0)
                    }, 800);
                }
            }
        }else{
            //si se juega contra la maquina
            if (modoJuego=="Un jugador") {
                //se buscara una posicion disponible
                let disponible=false
                while (disponible==false) {
                    let indiceRandom=Math.floor(Math.random()*(filas*columnas))//casilla random
                    //calculo fila y columna
                    let fila=Math.floor(indiceRandom/3)
                    let columna=indiceRandom%3
    
                    //si esta disponible inserto en el arreglo
                    if (tablero[fila][columna]==""){
                        disponible=true//para detener bucle while
                        casillas[indiceRandom].innerHTML=jugador
                        tablero[fila][columna]=jugador
                        contadorFichas+=1
                        jugador="X"//cambio de jugador
                        mostrarTurno.innerHTML="Turno de: "+jugador
                        continuarJuego()//verifico si debe continuar el juego
                    }
                }
            } else{//se juega con 2 jugadores
                let fila=Math.floor(i/3)
                let columna=i%3

                casillas[i].innerHTML=jugador//muestro en tablero de la pagina
                tablero[fila][columna]=jugador//inserto en arreglo (tablero)
                contadorFichas+=1
                jugador="X"//cambio de jugador
                mostrarTurno.innerHTML="Turno de: "+jugador
                continuarJuego()//verifico si debe continuar el juego
            }
        }
    }
}


function continuarJuego(){
    //tablero lleno 
    if (contadorFichas==filas*columnas) {
        juegoEnCurso=false
    }
    //verifico filas
    for (let i = 0; i < filas; i++){
        if (tablero[i][0]!=""&&tablero[i][0]==tablero[i][1]&&tablero[i][1]==tablero[i][2]){
            juegoEnCurso=false
            ganador=tablero[i][0]
        }
    }
    //verifico columnas
    for (let j = 0; j < filas; j++) {
        if (tablero[0][j]!=""&&tablero[0][j]==tablero[1][j]&&tablero[1][j]==tablero[2][j]){
            juegoEnCurso=false
            ganador=tablero[0][j]
        }
    }
    //diagonal principal
    if (tablero[0][0]!=""&&tablero[0][0]==tablero[1][1]&&tablero[1][1]==tablero[2][2]){
        juegoEnCurso=false
        ganador=tablero[0][0]
    }
    //diagonal secundaria
    if (tablero[0][2]!=""&&tablero[0][2]==tablero[1][1]&&tablero[1][1]==tablero[2][0]){
        juegoEnCurso=false
        ganador=tablero[0][2]
    }
}


function cambiarModo() {
    if (modoJuego=="Dos jugadores") {
        modoJuego="Un jugador"//cambio modo de jugo
        mostrarModo.innerHTML="Modo de juego: Un jugador"//lo muestro
        botonModoJuego.innerHTML="Dos jugadores"//cambio el texto del boton que cambia de modo
        inicializar()//reinicio el juego
    } else {
        modoJuego="Dos jugadores"
        mostrarModo.innerHTML="Modo de juego: Dos jugadores"
        botonModoJuego.innerHTML="Un jugador"
        inicializar()
    }
}


inicializar()