function comprar () {
   let tipoIngresso = document.getElementById('tipo-ingresso').value;
   let qtdIngresso = document.getElementById('qtd');
   let tipoEscolhido = document.getElementById('qtd-'+tipoIngresso);
   let subtracao = parseInt(tipoEscolhido.textContent) - qtdIngresso.value
   
   if (subtracao >= 0) {
      tipoEscolhido.textContent = subtracao;
   } else {
      if (tipoEscolhido.textContent == 1){
         alert ('Só nos resta '+ tipoEscolhido.textContent+ ' ingresso disponível para a '+ tipoIngresso + '.' )
      } else {
         alert ('Só nos restam '+ tipoEscolhido.textContent+ ' ingressos disponíveis para a '+ tipoIngresso + '.' )
      }
   }

   qtdIngresso.value = '';
}