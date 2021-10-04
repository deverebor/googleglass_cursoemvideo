function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}
/*
    Essa função calcula o total da quantia a ser paga pelo produto.
    Cirando uma variável qtd, que é a quantidade de elementos no id
    cQtd e dando um valo de número inteiro. Logo ápos é calculado o
    total e manda ser mostrado na caixa de texto do id cTot
    */
function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}