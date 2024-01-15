let ordemDePreco = true;

function ordenarPorPreco(livros) {
   if (ordemDePreco == true) {
      let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
      containerLivros.innerHTML = '';
      exibirOsLivrosNaTela(livrosOrdenados);
      ordemDePreco = false;
   } else {
      let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
      containerLivros.innerHTML = '';
      exibirOsLivrosNaTela(livrosOrdenados);
      ordemDePreco = true;
   }
}


