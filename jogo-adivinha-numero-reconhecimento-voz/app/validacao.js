function verificaValidadeChute() {
   const numero = +chute; // o + transforma a string em número inteiro

   if (chuteForInvalido(numero)) { //Se o número dado não for um number, que é transformado em função global lá em baixo
      elementoChute.innerHTML += (`<div>Valor inválido.</div>`);
   }

   if (numeroForaDoRange(numero)) {
      elementoChute.innerHTML += (`<div>Valor inválido. Tente um número entre ${menorValor} e ${maiorValor}.</div>`);
   }

   if (numero === numSecreto) {
      titulo = document.querySelector('.titulo');
      titulo.innerHTML = 'Acertô, mizeravi!';
      titulo.innerHTML = '';
      dica.innerHTML = 'Cê é o bixão memo hein doido!';
      document.body.style.backgroundColor = '#0174BE';   
   }

// function verificaNumAleatorio() {  
//    if (numSecreto > chute) {
//       dica.innerHTML = 'O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>';
//    } else if (numSecreto < chute) {
//       dica.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>';
//    } else {
//       titulo = document.querySelector('.titulo')
//       titulo.innerHTML = 'Acertô, mizeravi!';
//       titulo.innerHTML = '';
//       dica.innerHTML = 'Cê é o bixão memo hein doido!'
//       document.body.style.backgroundColor = '#0174BE';
//    }
// }

}

function chuteForInvalido(numero) {
   return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
   return numero > maiorValor || numero < menorValor;
}

