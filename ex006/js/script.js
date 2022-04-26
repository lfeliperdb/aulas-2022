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
    //entreida

    total = document.getElementById("total").value;


    //processuaimieinto

    if (marcado) {
        total = Number(total) + Number(valor)
    } else {
        total = Number(total) - Number(valor)
    }

    //suiaida

    total = document.getElementById("total").value = total;

}