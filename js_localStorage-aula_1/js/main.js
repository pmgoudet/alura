const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(element => {
    console.log(element)
    adicionaItem(element)
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

    
    if (item === "" || qtd === "") {
        return
    } else if (existe) {
        
    } else {
        adicionaItem (itemAtual)
        itens.push(itemAtual)
        localStorage.setItem('itens', JSON.stringify(itens));
    } 
    
    nome.value = ""
    quantidade.value = ""
})

function adicionaItem (itemAtual) {
    const numero = document.createElement('strong')
    numero.textContent = itemAtual.quantidade
    //numero.dataset.id = item.id

    const novoItem = document.createElement('li')
    novoItem.textContent = itemAtual.nome
    novoItem.classList.add('item')
    lista.appendChild(novoItem)
    
    novoItem.appendChild(numero)
    novoItem.insertBefore(numero, novoItem.firstChild)
}



/*

ANTES DE RESOLVER O ID, TEM QUE RESOLVER OS DUPLICADOS

numeroItem.dataset.id = item.id


*/

