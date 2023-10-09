let comida = "";
let categorias;

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let stop = false;
let querOuNao = prompt('Você deseja adicionar uma comida na sua lista de compras? \nDigite sim ou nao.');

if (querOuNao != "sim" && querOuNao != "não"){
	alert(`Operação não reconhecida!`);
    querOuNao = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

while (querOuNao == 'sim') {
    comida = prompt('Qual comida?');
    categorias = prompt('Em que categoria essa comida se encaixa? Use frutas, laticínios, congelados ou doces.');
    if (categorias == 'frutas') {
        frutas.push(comida); 
    }
    if (categorias == 'laticinios') {
        laticinios.push(comida); 
    }
    if (categorias == 'congelados') {
        congelados.push(comida); 
    }
    if (categorias == 'doces') {
        doces.push(comida); 
    } else {
        alert('Cê escreveu errado, irmão.')
    }
    querOuNao = prompt('Você deseja adicionar uma comida na sua lista de compras? \nDigite sim ou nao.');
}

if(!stop){
    alert(`Lista de compras: \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);
}









while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
}