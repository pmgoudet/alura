const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem('itens')) || []



form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const item = form.nome.value
    const qtd = form.quantidade.value
    
    const itemAtual = {
        item, 
        qtd
    }
    
    /*
    1 - verificar se há itens[]
    const existe = itens.find((element) => element === item);

    2 - se houver, 

    */

    itens.push(itemAtual)
    
    adicionaItem (item, qtd, itemAtual)

    nome.value = ""
    quantidade.value = ""
})

function adicionaItem (item, qtd, itemAtual) {
    const numero = document.createElement('strong')
    numero.textContent = qtd

    const novoItem = document.createElement('li')
    novoItem.textContent = item
    novoItem.classList.add('item')
    lista.appendChild(novoItem)
    
    novoItem.appendChild(numero)
    novoItem.insertBefore(numero, novoItem.firstChild)

    localStorage.setItem('itens', JSON.stringify(itens));
}



/*

fazer a página carregar chamando o localStorage

find()


const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12


*/

