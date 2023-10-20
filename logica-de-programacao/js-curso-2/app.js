let titulo = document.querySelector('.container__titulo');
let texto = document.querySelector('.texto__paragrafo');
let chute = document.querySelector('.container__input');
let numeroAleatorio = parseInt(Math.random() * 10 + 1);

let tentativas = 1;

console.log (numeroAleatorio)

titulo.innerHTML = 'Jogo do número secreto';
texto.innerHTML = 'Escolha um número entre 1 e 10.';

function verificarChute () {
    console.log(chute.value);

    if (chute.value == numeroAleatorio) {
        console.log ('ae')
    } else {
        console.log('nem')
    }
}