const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
   campo.addEventListener('blur', () => {
      console.log('ae')
   })
})



/*

- validar CPF
- data de nascimento tipo data e +18

*/

