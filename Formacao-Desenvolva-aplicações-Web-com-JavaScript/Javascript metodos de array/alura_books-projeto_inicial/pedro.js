const containerLivros = document.getElementById('livros');

async function mostrarLivros () {

   try {

      const busca = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
      const livros = await busca.json();

      console.log(livros);

      livros.forEach((livro) => {
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

   } catch (error) {
      console.log('errou!')
   }
}

mostrarLivros ();
