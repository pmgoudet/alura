var dica = document.querySelector('.dica');
let titulo = document.querySelector('.descritivo');

var menorValor = 1;
var maiorValor = 100;

titulo.innerHTML = `O número secreto está entre <span id="menor-valor">${menorValor}</span> e <span id="maior-valor">${maiorValor}</span>.`;

function gerarNumAleatorio() {
   return parseInt(Math.random()* maiorValor + 1);
}

const numSecreto = gerarNumAleatorio();
console.log(gerarNumAleatorio());

