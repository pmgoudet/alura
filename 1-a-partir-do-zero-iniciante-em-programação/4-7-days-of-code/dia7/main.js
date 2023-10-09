let var1 = Number;
let var2 = Number;
let oper = "";
let res = Number;


while (oper != 'sair') {
    oper = prompt('Qual operação você deseja fazer? \n - soma\n - subtracao\n - multiplicacao\n - divisao \n - sair');

    if (oper === 'sair') {
        alert('Até a próxima!');

    } else if (oper === 'soma') {
        var1 = parseFloat(prompt('Ok, digite o primeiro número:'));
        var2 = parseFloat(prompt('Agora o segundo:'));
        res = var1 + var2;
        alert(res);

    } else if (oper === 'subtracao') {
        var1 = prompt('Ok, digite o primeiro número:');
        var2 = prompt('Agora o segundo:');
        res = var1 - var2;
        alert(res);

    } else if (oper === 'multiplicacao') {
        var1 = prompt('Ok, digite o primeiro número:');
        var2 = prompt('Agora o segundo:');
        res = var1 * var2;
        alert(res);

    } else if (oper === 'divisao') {
        var1 = prompt('Ok, digite o primeiro número:');
        var2 = prompt('Agora o segundo:');
        res = var1 / var2;
        alert(res);
    } 

    else {
        oper = prompt('Valor inválido. Qual operação você deseja fazer? \n - soma\n - subtracao\n - multiplicacao\n - divisao \n - sair');
    }
}


/* 


let var1 = 0;
let var2 = 0;
let oper = "";
let res = 0;

oper = prompt('Qual operação você deseja fazer? \n - soma\n - subtracao\n - multiplicacao\n - divisao \n - sair');

if (oper === 'sair') {
    alert('Até a próxima!');
} else if (oper === 'soma') {
    var1 = parseFloat(prompt('Ok, digite o primeiro número:'));
    var2 = parseFloat(prompt('Agora o segundo:'));
    res = var1 + var2;
    alert(res);
} else if (oper === 'subtracao') {
    var1 = parseFloat(prompt('Ok, digite o primeiro número:'));
    var2 = parseFloat(prompt('Agora o segundo:'));
    res = var1 - var2;
    alert(res);
} else if (oper === 'multiplicacao') {
    var1 = parseFloat(prompt('Ok, digite o primeiro número:'));
    var2 = parseFloat(prompt('Agora o segundo:'));
    res = var1 * var2;
    alert(res);
} else if (oper === 'divisao') {
    var1 = parseFloat(prompt('Ok, digite o primeiro número:'));
    var2 = parseFloat(prompt('Agora o segundo:'));
    res = var1 / var2;
    alert(res);
} else {
    oper = prompt('Valor inválido. Qual operação você deseja fazer? \n - soma\n - subtracao\n - multiplicacao\n - divisao \n - sair');
}


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Saturday";
}



Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".



DICA
Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos como parâmetros e retornará com o resultado da operação.

Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de operação até que a pessoa deseje parar o programa.

Lembre-se também de que, além do if e else, também temos o switch, muito interessante de se utilizar em casos como esse, de múltipla escolha.

Personalize a sua calculadora da maneira que achar mais legal, e não se esqueça de compartilhá-la no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.









*/
