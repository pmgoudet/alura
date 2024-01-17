const btnFiltrarLivros = document.querySelectorAll('.btn'); 
const barraLaranja = document.getElementById('valor_total_livros_disponiveis');
let valorTotal = document.getElementById('valor');

btnFiltrarLivros.forEach((btn) => {
   btn.addEventListener('click', () => filtrarLivros(btn));
})

function filtrarLivros(btn) {
   containerLivros.innerHTML = '';
   barraLaranja.innerHTML = '';   
   
   if (btn.value != '') {
   let livrosFiltrados = livros.filter(livro => livro.categoria == btn.value);
   exibirOsLivrosNaTela (livrosFiltrados);

   } else if (btn.id == 'btnOrdenarPorPreco') {
      ordenarPorPreco(livros);
   
   } else if (btn.id == 'btnLivrosDisponiveis') {
   let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
   exibirOsLivrosNaTela (livrosDisponiveis);
   somarValorTotal(livrosDisponiveis);
   }
}


function somarValorTotal(livros) {
   let somaValor = 0;
   livros.forEach((livro) => somaValor += livro.preco);

   barraLaranja.innerHTML = `   
   <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${somaValor.toFixed(2)}</span></p>
   </div>
   `
}
