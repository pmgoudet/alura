const nome = prompt("Qual é o seu nome?");
const idade = prompt("Digite a sua idade");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

var resposta = (`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}! Grande merda...`);
alert(resposta)

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

function gostaOuNao(gosta) {
    if (gosta == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } else if (gosta == 2) {
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
}

gostaOuNao(gosta);