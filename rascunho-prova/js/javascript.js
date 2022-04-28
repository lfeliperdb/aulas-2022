function sessao() {
    // entrada

    tema = document.getElementById("tema").value;

    //processamento

    if (tema == "strange") {
        total = 25;
    } else if (tema == "sonic") {
        total = 15;
    } else {
        total = 20;
    }

    //saida

    document.getElementById("total").value = total;

    document.getElementById("pipoca").checked = false;
    document.getElementById("refil").checked = false;
    document.getElementById("chocolate").checked = false;
}

function dimensao(){
    //entrada

    total = document.getElementById("total").value;
    dimen = document.getElementById("dimen").value;

    //processamento

    if (dimen == "tresd") {
        total = Number(total) + 15;
    } 

    // saida

    document.getElementById("total").value = total;
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
function botao() {
    return href = "cartao.html"
}
/*
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
} */