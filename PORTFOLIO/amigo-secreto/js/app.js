let listaArray = [];
let listaSorteio = document.getElementById('lista-sorteio');
let listaAmigos = document.getElementById('lista-amigos');

function adicionar() {
   let nomeAmigo = document.getElementById('nome-amigo');
   
   if (nomeAmigo.value == '') {
      nomeAmigo.focus();
   } else if (listaArray.includes(nomeAmigo.value)) {
      alert('Já existe alguém com este nome. Insira uma inicial do sobrenome ou reescreva de outra maneira.')
   } else {  
      listaArray.push(nomeAmigo.value);
      if (listaAmigos.textContent == '') {
         listaAmigos.textContent = nomeAmigo.value;
      } else {
         listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
      }      
      nomeAmigo.value = '';
      nomeAmigo.focus();
   }
}

function sortear() {
   let sorteio = [];
   
   if (listaArray.length > 3) {
      for(i = 0; i < listaArray.length; i++) {
         let numAleatorio = Math.round(Math.random() * listaArray.length);
         let numExiste = sorteio.includes(numAleatorio);
         
         while (numAleatorio == i || numExiste == true || numAleatorio == listaArray.length) {
            numAleatorio = Math.round(Math.random() * listaArray.length);
            numExiste = sorteio.includes(numAleatorio);
         }
         sorteio.push(numAleatorio);
      }
      
      for(i = 0; i < listaArray.length; i++) {
         if (i == 0) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + `${listaArray[i]} ➔ ${listaArray[sorteio[i]]}`
         } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<br>${listaArray[i]} ➔ ${listaArray[sorteio[i]]}`
         }
      }
   } else {
      alert('Este sorteio funciona com no mínimo 4 participantes.')
   }
}

function reiniciar() {
   listaArray = [];
   listaAmigos.textContent = '';
   listaSorteio.innerHTML = '';
}
