const btnFiltrarLivros = document.querySelectorAll('.btn'); 

btnFiltrarLivros.forEach((btn) => {
   btn.addEventListener('click', () => filtrarLivros(btn));
})

function filtrarLivros(btn) {
   if (btn.value != '') {
   let livrosFiltrados = livros.filter(livro => livro.categoria == btn.value);
   containerLivros.innerHTML = '';
   exibirOsLivrosNaTela (livrosFiltrados);
   } else if (btn.id == 'btnOrdenarPorPreco') {
      ordenarPorPreco(livros);
   }
}
