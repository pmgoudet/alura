var valorTotal = document.getElementById('valor-total');

function adicionar(){
    var produtos = document.getElementById('produto');
    var quantidade = document.getElementById('quantidade');

    const produtoSelecionado = produtos.value;
    const [produto, preco] = produtoSelecionado.split(' - ');

    const valor = preco.split('R$')[1];
    
    if (quantidade.value !== '') {
        var carrinho = document.getElementById('lista-produtos');
        
        const itemExiste = Array.from(carrinho.children).some(item => {
            return item.textContent.includes(produto);
        }); //DEVOLVE TRUE OU FALSE
             
        

        if (itemExiste == false) {
            var novoItemCarrinho = document.createElement('section');
            carrinho.appendChild(novoItemCarrinho);
            novoItemCarrinho.className = 'carrinho__produtos__produto';
            novoItemCarrinho.innerHTML = `<span class="texto-azul quantidade">${quantidade.value}x</span> ${produto} <span class="texto-azul"> R$${parseInt(valor * quantidade.value)}</span>`;
 
            var valorDef = valorTotal.innerHTML.split('R$')[1];
            valorDef = parseInt(valorDef) + valor*quantidade.value;
            
            valorTotal.innerHTML = "R$ " + valorDef;
        } else {
            
        }
    } else {
        quantidade.focus();
    }
    quantidade.value = ''
}

function limpar() {
    var produtosDelete = document.querySelectorAll('.carrinho__produtos__produto');
    produtosDelete.forEach(function(produto) {
        produto.remove();
    });
    valorTotal.innerHTML = "R$ 0";
}









// var valorTotal = document.getElementById('valor-total');

// function adicionar(){
//     var produtos = document.getElementById('produto');
//     var quantidade = document.getElementById('quantidade');

//     const produtoSelecionado = produtos.value;
//     const [produto, preco] = produtoSelecionado.split(' - ');

//     const [lixo, valor] = preco.split('R$');
    
//     if (quantidade.value !== '') {
//         var carrinho = document.getElementById('lista-produtos');
        
//         const itemExiste = Array.from(carrinho.children).some(item => {
//             return item.textContent.includes(produto);
//         }); //DEVOLVE TRUE OU FALSE
             
        

//         if (itemExiste == false) {
//             var novoItemCarrinho = document.createElement('section');
//             carrinho.appendChild(novoItemCarrinho);
//             novoItemCarrinho.className = 'carrinho__produtos__produto';
//             novoItemCarrinho.innerHTML = `<span class="texto-azul">${quantidade.value}x</span> ${produto} <span class="texto-azul"> R$${parseInt(valor * quantidade.value)}</span>`;
 
//             var [lixo2, valorDef] = valorTotal.innerHTML.split('R$');
//             valorDef = parseInt(valorDef) + valor*quantidade.value;
            
//             valorTotal.innerHTML = "R$ " + valorDef;
//         } else {
//             // ELE SABE QUE O ITEM EXISTE. E AGORA PRA RECUPERAR ESSE ITEM? o pulo do gato tá no quantidade.value. Como acessar o antigo e somar o novo?
            
            
//             //novoItemCarrinho.innerHTML = `<span class="texto-azul">${quantidade.value}x</span> ${produto} <span class="texto-azul"> R$${parseInt(valor * quantidade.value)}</span>`;
//         }
//     } else {
//         quantidade.focus();
//     }
//     quantidade.value = ''
// }

// function limpar() {
//     var produtosDelete = document.querySelectorAll('.carrinho__produtos__produto');
//     produtosDelete.forEach(function(produto) {
//         produto.remove();
//     });
//     valorTotal.innerHTML = "R$ 0";
// }


