function aplicarDesconto (livros) {

   const desconto = 0;

   livrosComDesconto = livros.map( livro => {
      return {... livro, preco: livro.preco - (livro.preco * desconto)}
   })
   return livrosComDesconto
}



/*

EU FIZ ANTES DA EXPLICAÇÃO

function desconto (porcentagem) {
   let array = []
   livros.forEach((livro) => {
      array.push(livro.preco);
   })

   const descontoCalculado = array.map((x) => x - x * (porcentagem / 100));
   let descontoPronto = descontoCalculado.map(x => parseFloat(x.toFixed(2)))

   return descontoPronto;
}
*/

