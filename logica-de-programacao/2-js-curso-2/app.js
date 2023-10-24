var numeroSecreto = criaNumeroAleatorio ();
let chute = document.querySelector('.container__input');
let tentativas = 1;

let pluralTentativa = 'tentativas';

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
    if (chute.value == '') {
        console.log('otario')
    } else if (chute.value == numeroSecreto) {
        tentativas == 1 ? pluralTentativa = 'tentativa' : pluralTentativa = 'tentativas';
        textoNaTela ('.container__titulo', 'Acertô, mizeravi!');
        textoNaTela ('.texto__paragrafo', `Você descobriu o número com ${tentativas} ${pluralTentativa}.`);
        habilitaBotao();
    } else if (numeroSecreto > chute.value) {
        textoNaTela ('.container__titulo', 'Errou =(');
        textoNaTela ('.texto__paragrafo', 'O número que você chutou é menor que o número secreto');
        tentativas++;
    } else {            
        textoNaTela ('.container__titulo', 'Errou =(');
        textoNaTela ('.texto__paragrafo', 'O número que você chutou é maior que o número secreto');
        tentativas++;
    }
    chute.value = ''
}

function atualizarPagina() {
    location.reload();
}

function habilitaBotao() {
    const botaoReiniciar = document.querySelector('#reiniciar');
    botaoReiniciar.removeAttribute('disabled')
}