const titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Hora do Desafio';

function fConsole() {
    console.log('O botão foi clicado');
}

function fAlerta() {
    alert('Eu amo JS!');
}

function fPrompt() {
    var cidade = prompt('Digite o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function fSoma() {
    var n1 = parseInt(prompt('Digite um número.'))
    var n2 = parseInt(prompt('Agora outro.'))
    alert(`A soma de ${n1} e ${n2} é ${n1+n2}.`)
}

function olaMundo () {
    console.log ('Olá mundo')
}
olaMundo ()

function nome(nome) {
    console.log('Olá ' + nome)
}
nome('Pedrão')

function dobro (numero) {
    console.log(numero*2)
}
dobro (4)

function media (n1, n2, n3) {
    console.log((n1 + n2 + n3) / 3)
}
media (2,3,4)

function maiorNumero (n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}
console.log (maiorNumero(5, 58))


function quadrado (numero) {
    console.log(numero*numero)
}
quadrado (4)


/*
Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

*/ 

