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