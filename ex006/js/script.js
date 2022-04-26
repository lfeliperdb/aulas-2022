function calculos() {

    // entrada

    horario = document.forms.horario.value

    //processamento

    if (horario == "manha") {
        preco = 1500; 
    } else if (horario == "tarde") {
        preco = 1800;
    } else if (horario == "noite") {
        preco = 2300;
    }

    //saida

    document.getElementById("total").value = preco;
}
