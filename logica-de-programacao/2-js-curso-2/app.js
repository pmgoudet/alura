var numeroSecreto = criaNumeroAleatorio ();
let chute = document.querySelector('.container__input');
let tentativas = 1;

function textoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

textoNaTela ('.container__titulo', 'Jogo do número secreto.');
textoNaTela ('.texto__paragrafo', 'Escolha um número entre 1 e 10.');

function criaNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}

console.log(numeroSecreto)

function verificarChute () {
    if (chute.value == numeroSecreto) {
        textoNaTela ('.container__titulo', 'Acertô, mizeravi!');
        textoNaTela ('.texto__paragrafo', `Você descobriu o número com ${tentativas} tentativas.`);
    } else if (numeroSecreto > chute.value) {
        textoNaTela ('.container__titulo', 'Errou =(');
        textoNaTela ('.texto__paragrafo', 'O número que você chutou é menor que o número secreto');
    } else {            
        textoNaTela ('.container__titulo', 'Errou =(');
        textoNaTela ('.texto__paragrafo', 'O número que você chutou é maior que o número secreto');
        tentativas++
    }
     
}


/* 
titulo = Acertou! 
ou 
Errou =(

texto = Você descobriu o número com x tentativas.
ou 
O numero é maior / menor que o seu chute
*/


