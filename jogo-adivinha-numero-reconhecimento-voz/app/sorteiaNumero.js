var dica = document.querySelector('.dica');
let titulo = document.querySelector('.descritivo');

var menorValor = 1;
var maiorValor = 100;

titulo.innerHTML = `O número secreto está entre <span id="menor-valor">${menorValor}</span> e <span id="maior-valor">${maiorValor}</span>.`


function gerarNumAleatorio() {
   return parseInt(Math.random()* maiorValor + 1);
}

const numSecreto = gerarNumAleatorio()
// const chute = onSpeak()


function verificaNumAleatorio() {  
   if (numSecreto > chute) {
      dica.innerHTML = 'O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>';
   } else if (numSecreto < chute) {
      dica.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>';
   } else {
      titulo = document.querySelector('.titulo')
      titulo.innerHTML = 'Acertô, mizeravi!';
      titulo.innerHTML = '';
      dica.innerHTML = 'Cê é o bixão memo hein doido!'
      document.body.style.backgroundColor = '#0174BE';
   }
}
   

