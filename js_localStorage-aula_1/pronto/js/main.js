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

    const existe = itens.find(elemento => elemento.nome === nome.value)

    if (existe) {
        itemAtual.id = existe.id
        atualizaItem(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual

    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;
        adicionaItem(itemAtual)
        itens.push(itemAtual)
    }

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
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem) // insere novoItem no elemento pai (lista)
}

function atualizaItem(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}


function botaoDeleta(id) {
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()
    console.log(tag)
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem("itens", JSON.stringify(itens))
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


14 - Hora de resolver os itens duplicados:
    • primeiro busca o item "cueca" por exemplo no array "itens"
        const existe = itens.find(elemento => elemento.nome === nome.value)
    • aí mete a condicional no eventlistener mesmo


15 - elemento de controle nos itens, ou seja, criar um ID
    if (existe) {
        console.log(quantidade.value)
        console.log(lista)

        itemAtual.id = existe.id
    }


16 - Mas na hora de adicionaItem nao criamos id... tem que criar. Use DATA ATTRIBUTES. Vamos criar um ID que faça com que a cada item criado, ele ganha o número do array, por exemplo, se eu tenho um item na lista, este item é id = 0, o próximo será id=1 e etc. 
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id // SÓ ISSO AQUI É NOVIDADE


17 - Já criamos o id, vamos por isso no else
    } else {
        itemAtual.id = itens.length // NOVIDADE
        adicionaItem(itemAtual)
        itens.push(itemAtual)
    }


18 - no if: console.log(existe.id), ele confirma o ID do elemento.


19 - criar funcao de atualizar element. Só falta achar o strong
    if (existe) {
        itemAtual.id = existe.id
        function atualizaItem(itemAtual)
    }

    atualizaItem(item) {
        document.querySelector("[data-id='"+item.id+"']")
    }
    dê um console.log(document.querySelector("[data-id='"+item.id+"']")) pra ver o que vc capturou. Achamos o strong do item.


20 - Agora substituímos a quantidade no strong
function atualizaItem(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}


21 - o localStorage não foi atualizado ¬¬. Tem que achar a posição do LS onde está nosso conteúdo e sobrescrever. A posição é o existe.id

    if (existe) {
        itemAtual.id = existe.id
        atualizaItem(itemAtual)
        itens[existe.id] = itemAtual // É ISSO AQUI
    }


22 - REMOVER ITENS. Criar função de deletar 
    function botaoDeleta() {
        const elementoBotao = document.createElement('button')
        elementoBotao.innerText = "x"

        return elementoBotao
    }


23 - não pode esquecer de meter ele na função adicionaItem
    novoItem.appendChild(botaoDeleta())


24 - não há eventListener associado. Tem que criar. 
        elementoBotao.addEventListener('click', () => {
        console.log('click')
    })


25 - E não pode ser função anonima pq o JS não carrega a função do "this" neste caso. Não me pergunte o que isso significa, mas serve pra achar o X do elemento específico clicado. 

    elementoBotao.addEventListener('click', function() {
        console.log(this)
    })


26 - Então ao inves de chamar console log, chamamos a função: 

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode)  // se for só this ele deleta o botao apenas
    })

    function deletaElemento(tag) {
    tag.remove()
    }


27 - só falta o localStorage. Remover um item do array:
    itens.splice('tag', 1)


28 - só que essa merda funciona em índice. Como achar a posição? A posição é o ID que a gente usa. Ou seja, parâmetro da função no envio e no recebimento:

    novoItem.appendChild(botaoDeleta(item.id))
    (...)
    function botaoDeleta(id) {
    (...)
    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id )
    })
    (...)
    function deletaElemento(tag, id) {



29 - achamos o ID? tem que procurar o index ainda... mesmo esquema que o item 14, usar o find para ler o index e encontrá-lo.

    function deletaElemento(tag) {
        tag.remove()
        itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    }


30 - o array foi modificado mas não sobrescrito no localStorage. fazer a mesma coisa do item 4
    localStorage.setItem("itens", JSON.stringify(itens))


31 - Agora a treta do ID que se repete conforme a gente deleta item no meio do array. A lógica aqui tem que ser:
    } else {
        itemAtual.id = itens[itens.length - 1]


32 - Só que se o array tiver vazio o resultado será itens[-1], ou seja, dá pau. Tem que criar uma condição pra evitar isso: 

OPERADOR TERNÁRIO:
    ? : se positivo, faça algo. Se negativo, faça outra coisa. 
    0 : se meu array não tem nada, quero dar pra ele o valor 0
    se já tiver algum ID, quero achar no ultimo elemento e adiciono 1 a ele
    

COMPLICADO, NÉ? Se escreve assim:
        } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length]


33 - Agora o problema é que, ao apenas atualizar a quantidade de um item ele buga pois pega o itemAtual e cria o ID da maneira antiga e ruim. Usar de novo o findIndex
    if (existe) {
        itemAtual.id = existe.id
        atualizaItem(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual



*/
