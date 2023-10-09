let comida = "";
let categorias;
let banana = 'banana';
let pera = 'pera';
let queijo = 'queijo';
let leite = 'leite';

let frutas = [banana, pera];
let laticinios = [queijo, leite];
let congelados = [];
let doces = [];

var botao = document.getElementById('botao')



function quer () {
    let querOuNao = prompt('Você deseja adicionar ou remover uma comida de sua lista de compras? \nDigite "adicionar", "remover" ou "terminei".');

    while (querOuNao != "adicionar" && querOuNao != "remover" && querOuNao != "terminei"){
        alert(`Operação não reconhecida!`);
        querOuNao = prompt('Você deseja adicionar ou remover uma comida de sua lista de compras? \nDigite adicionar, remover ou terminei.');
    }

    while (querOuNao == 'adicionar') {
        comida = prompt('Qual comida?');
        categorias = prompt('Em que categoria essa comida se encaixa? Use frutas, laticínios, congelados ou doces.');
        if (categorias == 'frutas') {
            frutas.push(comida); 
        } else if (categorias == 'laticinios') {
            laticinios.push(comida); 
        } else if (categorias == 'congelados') {
            congelados.push(comida); 
        } else if (categorias == 'doces') {
            doces.push(comida); 
        } else {
            alert('Cê escreveu errado, irmão.')
        }
        querOuNao = prompt('Você deseja adicionar ou remover uma comida de sua lista de compras? \nDigite adicionar, remover ou terminei.');
    }

    while (querOuNao == 'remover') {
        remove = prompt(`Lista de compras: \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n\nNão escreva mais de uma comida por vez, por favor. Tô começando, né...`);
        if (frutas.indexOf(remove) != -1){
            var pos = frutas.indexOf(remove);
            var remove = frutas.splice(pos, 1); 
        
        } else if (laticinios.indexOf(remove) != -1){
            var pos = laticinios.indexOf(remove);
            var remove = laticinios.splice(pos, 1); 
        
        } else if (congelados.indexOf(remove) != -1){
            var pos = congelados.indexOf(remove);
            var remove = congelados.splice(pos, 1); 
        
        } else if (doces.indexOf(remove) != -1){
            var pos = doces.indexOf(remove);
            var remove = doces.splice(pos, 1); 
        } else {
            alert('Este item não está na lista.');
        }

        stopRemove = prompt('Você deseja remover mais uma comida de sua lista de compras? \nDigite sim ou não.');
        if (stopRemove == 'sim') {
            querOuNao == 'remover'
        } else {
            quer();
        }
    }

    if(querOuNao == 'terminei'){
        alert(`Lista de compras: \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);
    }

}

botao.addEventListener('click', quer);
