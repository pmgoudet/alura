const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(element => {
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
        itemAtual.id = existe.id
        atualizaItem(itemAtual, existe)

    } else {
        itemAtual.id = new Date().getTime();
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
    numero.dataset.id = itemAtual.id;

    const novoItem = document.createElement('li')
    novoItem.textContent = itemAtual.nome
    novoItem.classList.add('item')
    lista.appendChild(novoItem)
    
    novoItem.appendChild(numero)
    novoItem.insertBefore(numero, novoItem.firstChild)
    novoItem.appendChild(botaoDeleta(itemAtual.id))

    
}

function atualizaItem (itemAtual, existe) {
    const strong = document.querySelector("[data-id='"+itemAtual.id+"']") // PULEI SEM ENTENDER
    strong.innerHTML = itemAtual.quantidade
    itens[existe.id] = itemAtual
    localStorage.setItem('itens', JSON.stringify(itens));
}

function botaoDeleta (id) {
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = "X"
    
    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao // NÃO ENTENDI TB
}

function deletaElemento(tag, id) {
    tag.remove()
    itens.splice(itens.findIndex((element) => element.id === id), 1) // DIFÍCIL
    localStorage.setItem("itens", JSON.stringify(itens))
}


/*
AQUI AINDA NÃO TÁ RESOLVIDA A QUESTÃO DO ID UNICO...
*/ 


