const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
   campo.addEventListener('blur', () => validacaoCampo(campo));
});

function validacaoCampo(campo) {
   if (campo.value == "") {
         console.log('nao valido')
   } else {
      console.log('valido')
   }
}


/*

- NAO LEMBRO COMO  fazer ele validar o campo no blur

- validar CPF
- data de nascimento tipo data e +18

*/

