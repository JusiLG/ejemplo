var contador = 0;
function juego1() {
    contador++;
    var textoActual = document.getElementById("btn1").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn1").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn1").value = "O";
    }
}

function juego2() {
    contador++;
    var textoActual = document.getElementById("btn2").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn2").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn2").value = "O";
    }
}

function juego3() {
    contador++;
    var textoActual = document.getElementById("btn3").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn3").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn3").value = "O";
    }
}

function juego4() {
    contador++;
    var textoActual = document.getElementById("btn4").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn4").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn4").value = "O";
    }
}

function juego5() {
    contador++;
    var textoActual = document.getElementById("btn5").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn5").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn5").value = "O";
    }
}

function juego6() {
    contador++;
    var textoActual = document.getElementById("btn6").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn6").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn6").value = "O";
    }
}

function juego7() {
    contador++;
    var textoActual = document.getElementById("btn7").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn7").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn7").value = "O";
    }
}

function juego8() {
    contador++;
    var textoActual = document.getElementById("btn8").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn8").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn8").value = "O";
    }
}

function juego9() {
    contador++;
    var textoActual = document.getElementById("btn9").value;
    if(textoActual == " " && contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9) {
        document.getElementById("btn9").value = "X";
    } else if(textoActual == " " && contador == 2 || contador == 4 || contador == 6 || contador == 8) {
        document.getElementById("btn9").value = "O";
    }
}

function resultado() {
    var j1 = document.getElementById("nombre1").value;
    var j2 = document.getElementById("nombre2").value;
    var btn1 = document.getElementById("btn1").value;
    var btn2 = document.getElementById("btn2").value;
    var btn3 = document.getElementById("btn3").value;
    var btn4 = document.getElementById("btn4").value;
    var btn5 = document.getElementById("btn5").value;
    var btn6 = document.getElementById("btn6").value;
    var btn7 = document.getElementById("btn7").value;
    var btn8 = document.getElementById("btn8").value;
    var btn9 = document.getElementById("btn9").value;
    if(j1 == "" || j2 == "") {
        alert("Ingrese su nombre")
    }
    if(btn1 == "X" && btn2 == "X" && btn3 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn4 == "X" && btn5 == "X" && btn6 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn7 == "X" && btn8 == "X" && btn9 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn1 == "X" && btn4 == "X" && btn7 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn2 == "X" && btn5 == "X" && btn8 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn3 == "X" && btn6 == "X" && btn9 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn1 == "X" && btn5 == "X" && btn9 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn3 == "X" && btn5 == "X" && btn7 == "X") {
        alert("El ganador es: " + j1);
    } else if(btn1 == "O" && btn2 == "O" && btn3 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn4 == "O" && btn5 == "O" && btn6 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn7 == "O" && btn8 == "O" && btn9 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn1 == "O" && btn4 == "O" && btn7 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn2 == "O" && btn5 == "O" && btn8 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn3 == "O" && btn6 == "O" && btn9 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn1 == "O" && btn5 == "O" && btn9 == "O") {
        alert("El ganador es: " + j2);
    } else if(btn3 == "O" && btn5 == "O" && btn7 == "O") {
        alert("El ganador es: " + j2);
    } else {
        alert("Empate")
    }
}