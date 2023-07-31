const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => { 
    adicionaItem(elemento)
})

form.addEventListener("submit", (event) => {  
    event.preventDefault()

    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    
    adicionaItem(itemAtual)
    
    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))
    var listaArmazenada = localStorage.getItem("listaItens");

    nome.value = ""
    quantidade.value = ""

})

function adicionaItem(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem) // insere novoItem no elemento pai (lista)
}


/*
PASSO A PASSO

1 - encontrar o form e desativar o submit OK
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        adicionaItem(nome.value, quantidade.value)

   
2 - localizar nome e quantidade  OK 
    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']
    

3 - criar a <li> com o item, adicionar classe e meter a quantidade no <strong> OK
    novoItem.innerHTML = `<strong>${quantidade}</strong>${nome}`;
    lista.appendChild(novoItem);


4 - depois de criar a li, fazer com que ela fique no localStorage
    localStorage.setItem("item", JSON.stringify(itens))


5  - ao conseguir adicionar essa merda, falta transformar os itens em array para que nao sobrescreva a cada vez.  
    const itens = []

    itens.push(itemAtual)
    localStorage.setItem("item", JSON.stringify(itens))


6 - aí com tudo em array e no localstorage, precisa carregar a lista que já estiver no localstorage, caso haja.
    const itens = localStorage.getItem("itens") || []


7 - só que agora ele pega os "itens" (ver console.log(itens)) pra confirmar, só que não carrega. precisa enfiar fazer uma leitura de loop pra cada item do array.
    itens.forEach ((elemento) => { 
        console.log(elemento)
    })


8 - só que agora o erro que vai dar é que o itens é uma string, então:
    const itens = JSON.parse(localStorage.getItem("itens")) || []

    itens.forEach( (elemento) => { 
        console.log(elemento.nome, elemento.quantidade)
    })


9 - só que aqui tem um problema de lógica e não vai carregar o conteúdo do localstorage pra lista. Então, pra inserir os dados no localStorage era preciso criar um objeto:

const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
}

itens.push(itemAtual)

localStorage.setItem("itens", JSON.stringify(itens))
var listaArmazenada = localStorage.getItem("listaItens")

E se tirássemos essa tarefa da função adicionaItens() e puséssemos dentro da criação do evento? form.addEventListener("submit", (event).... 


10 - Mas não esqueça do .value no objeto
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }


11 - Outro detalhe, adicionaItem(nome.value, quantidade.value) agora só recebe itemAtual
    adicionaItem(itemAtual)


12 - Acabou que mudamos todos os parâmetros

13 - agora chamamos a função criar elemento toda vez que atualiza a página:
itens.forEach( (elemento) => { 
    adicionaItem(elemento)
})





*/
