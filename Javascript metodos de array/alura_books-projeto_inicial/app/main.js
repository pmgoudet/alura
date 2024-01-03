let livros = [];
const containerLivros = document.getElementById('livros')
const endpoitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosNaAPI()

async function getBuscarLivrosNaAPI () {
   const busca = await fetch(endpoitDaAPI);
   livros = await busca.json();
   console.table(livros);
   exibirOsLivrosNaTela (livros);   
   aplicarDesconto (livros);   
} 

function exibirOsLivrosNaTela(listaDeLivros) {
   
   listaDeLivros.forEach((livro) => {
      containerLivros.innerHTML += `<div class="livro">
         <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
         <h2 class="livro__titulo">
            ${livro.titulo}
         </h2>
         <p class="livro__descricao">${livro.autor}</p>
         <p class="livro__preco" id="preco">R$${livro.preco}0</p>
         <div class="tags">
            <span class="tag">${livro.categoria}</span>
         </div>
      </div>`
   });
}

function aplicarDesconto(livro) {

   //const desconto = livros.preco.map((x) => x * 0.9)
   

   //console.log(desconto)
}

