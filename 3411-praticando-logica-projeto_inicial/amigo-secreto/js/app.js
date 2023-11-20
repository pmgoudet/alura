let listaArray = []

function adicionar() {
   let nomeAmigo = document.getElementById('nome-amigo');
   let listaAmigos = document.getElementById('lista-amigos');

   listaArray.push(nomeAmigo.value);
   listaAmigos.textContent = listaArray;

   nomeAmigo.value = '';
}

function sortear() {

   let sorteio = Math.round(Math.random() * listaArray.length);
   let listaSorteio = document.getElementById('lista-sorteio')
   
   listaArray[sorteio];
}


// tem a lista array e aí 