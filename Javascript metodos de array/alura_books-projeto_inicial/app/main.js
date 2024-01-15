let livros = [];
const endpoitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosNaAPI()

async function getBuscarLivrosNaAPI () {
   const busca = await fetch(endpoitDaAPI);
   livros = await busca.json();

   let livrosComDesconto = aplicarDesconto(livros)
   exibirOsLivrosNaTela (livrosComDesconto);
} 

