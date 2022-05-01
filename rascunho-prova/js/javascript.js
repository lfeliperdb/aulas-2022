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

    if (tema == "batman") {
        titulo = "Batman";
        newFundo = "img/batman.jpg";
        cor = "black";
        
        altura = "100%";
        right = "0%";
        bottom = "-5";
        
    } else if (tema == "strange") {
        titulo = "Dr. Estranho";
        newFundo = "img/strange.jpg";
        cor = "darkred"
        
    } else if (tema == "sonic") {
        titulo = "Sonic";
        newFundo = "img/sonic.jpg";
        cor = "darkblue"
        
    } else if (tema == "") {
        titulo = "Sessão de Cinema";
        newFundo = "";
        cor = "black";
    }

    //saida

    document.getElementById("total").value = total;

    document.getElementById("pipoca").checked = false;
    document.getElementById("refil").checked = false;
    document.getElementById("chocolate").checked = false;

    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")"
        
    document.getElementById("titulo").style.color = cor 

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