
let numero = Math.floor(Math.random() * (0 + 10) + 0);
let acertou = false


for (i = 0; i < 3; i++) {

    chute = prompt('Tente adivinhar um número de 0 a 10 pra testar nossa conexão mental.');

    if (chute == numero) {
        alert('ACERTÔ MIZERAVI!');
        acertou = true;
        break;
    } else {
        alert("Errado!");
    }
    
}

if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}
































/*
const numeroAdivinhacao = 7;
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
*/


/*
Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.








Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
DICA
Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.

Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.
EXTRA
Dê uma olhada nesse site para aprender mais sobre estruturas de repetição.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a Math.random() nesse site.
*/