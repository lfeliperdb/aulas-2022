function calc() {
    // entrada

    horario = document.form.horario.value;

    //processamento

    if (horario == "manha") {
        valor = 1500; 
    } else if (horario == "tarde") {
        valor = 1800;
    } else {
        valor = 2300;
    }

    //saida

    document.getElementById("total").value = valor;

    document.getElementById("gul").checked = false;
    document.getElementById("pers").checked = false;
    document.getElementById("atr").checked = false;
    document.getElementById("maq").checked = false;
    document.getElementById("brin").checked = false;
}
function opc(valor,marcado) {
    //entrada

    total = document.getElementById("total").value;


    //processamento

    if (marcado) {
        total = Number(total) + Number(valor)
    } else {
        total = Number(total) - Number(valor)
    }

    //saida

    total = document.getElementById("total").value = total;

}

function trocaTema(){
    //entrada
    tema = document.getElementById("tema").value

    //preocessamento
    if (tema == "mario") {
        titulo = "Super Mario";
        newFundo = "img/mario.jpg";
        newFoto = "img/mario.png";
        cor = "darkred";

        altura = "100%";
        right = "0%";
        bottom = "-5";

    } else if (tema == "pjmasks") {
        titulo = "PJ Masks";
        newFundo = "img/pjmasks.jpg";
        newFoto = "img/pjmasks.png";
        cor = "darkblue"

    } else if (tema == "sofia") {
        titulo = "Princesinha Sofia";
        newFundo = "img/sofia.jpg";
        newFoto = "img/sofia.png";
        cor = "purple"

    } else {
        titulo = "Tema da Festa";
        newFundo = "";
        newFoto = "";

    }
    //saida
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")"
    document.getElementById("foto").src = newFoto;
    document.getElementById("titulo").style.color = cor
}