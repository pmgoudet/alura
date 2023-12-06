function verificaValidadeChute(chute) {
   const numero = +chute; // o + transforma a string em número inteiro

   if (chuteForInvalido(numero)) { 
      elementoChute.innerHTML += (`<div class="dica">Valor inválido.</div>`);
      return
   }
   
   if (numeroForaDoRange(numero)) {
      elementoChute.innerHTML += (`<div class="dica">Valor inválido. Tente um número entre ${menorValor} e ${maiorValor}.</div>`);
      return
   }
   
   if (numero === numSecreto) {
      document.body.innerHTML = `
      <h1>Acertô, mizeravi!'</h1>
      <h3>O número secreto era ${numSecreto}.</h3>
      <p class="dica">Cê é o bixão memo hein doido!</p>
      <button id="reiniciar-pagina" class="botao">Recomeçar jogo</button>
      `
      document.body.style.backgroundColor = '#0174BE';

      document.body.addEventListener('click', e => {
         if (e.target.id == 'reiniciar-pagina') {
            window.location.reload();
         }
      })
      
   } else if (numero < numSecreto) {
      elementoChute.innerHTML = `<div>Você disse:</div>
      <span class="box">${numero}</span>
      <div class="dica">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
   } else {
      elementoChute.innerHTML = `<div>Você disse:</div>
      <span class="box">${numero}</span>
      <div class="dica">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
   }
}

function chuteForInvalido(numero) {
   return Number.isNaN(numero);//Se o número dado não for um number, que é transformado em função global aqui em baixo
}

function numeroForaDoRange(numero) {
   return numero > maiorValor || numero < menorValor;
}
