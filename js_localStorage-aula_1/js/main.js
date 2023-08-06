const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(element => {
    adicionaItem(element.nome, element.quantidade)
});

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const item = form.nome.value
    const qtd = form.quantidade.value
    const itemAtual = {
        "nome": item, 
        "quantidade": qtd
    }

    const existe = itens.find((element) => element.nome === item);
    
    if (existe) {
        console.log(existe)
        console.log(existe.quantidade, itemAtual.quantidade)
        itemAtual.quantidade = existe.quantidade

    } else {
        adicionaItem (item, qtd)
        itens.push(itemAtual)
        localStorage.setItem('itens', JSON.stringify(itens));
    } 
    
    nome.value = ""
    quantidade.value = ""
})

function adicionaItem (item, qtd) {
    const numero = document.createElement('strong')
    numero.textContent = qtd

    const novoItem = document.createElement('li')
    novoItem.textContent = item
    novoItem.classList.add('item')
    lista.appendChild(novoItem)
    
    novoItem.appendChild(numero)
    novoItem.insertBefore(numero, novoItem.firstChild)
}



/*



*/

