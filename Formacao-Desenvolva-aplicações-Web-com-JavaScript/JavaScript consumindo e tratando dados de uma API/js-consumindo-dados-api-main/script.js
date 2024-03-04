// JEITO MAIS CORRETO COM MENOS '.then'

async function buscaEndereco(cep) {
   var mensagemErro = document.getElementById('erro');
   mensagemErro.innerHTML = "";
   try {
      var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      var consultaCepConvertida = await consultaCep.json();
      
      // aqui se o CEP tem a quantidade certa de números mas está errado ele dá erro = true. Ou seja, tem que afinar o erro pra dar a mensagem certa:
      if (consultaCepConvertida.erro) {
         document.getElementById('cep').focus();
         throw Error('Esse CEP não existe, parsa.')
      }
      console.log(consultaCepConvertida);

      document.getElementById('endereco').value = consultaCepConvertida.logradouro;
      document.getElementById('cidade').value = consultaCepConvertida.localidade;
      document.getElementById('estado').value = consultaCepConvertida.uf;
      document.getElementById('complemento').value = consultaCepConvertida.complemento;
      document.getElementById('bairro').value = consultaCepConvertida.bairro;

      return consultaCepConvertida;
      
   } catch (erro) {
      mensagemErro.innerHTML = '<p>CEP inválido, parsa. Tente de novo!</p>';
   }

}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));












/* pra consultar varios ceps ao mesmo tempo 


let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))

Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
*/


/*

UM JEITO DE FAZER UM CÓDIGO ASSÍNCRONO, COM MUITOS '.then'

var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => { // then quando a promessa é resolvida
   if (r.erro) {
      throw Error('Esse CEP não existe, parça.')
   } else {
      console.log(r)}
   })
.catch(erro => console.log(erro)) // quando a promessa é rejeitada
.finally(console.log('Processamento concluído')); 


console.log(consultaCep); 

*/