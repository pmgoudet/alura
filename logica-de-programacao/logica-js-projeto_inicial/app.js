const botao = document.querySelector('.container__imagem-robo')

let numeroMaximo = 100
let numeroAleatorio = parseInt(Math.random() * numeroMaximo) + 1;
let tentativas = 1
acertou = false

console.log(numeroAleatorio)

botao.addEventListener('click', () => {
    var chute = prompt(`Tenho um número inteiro entre 0 e ${numeroMaximo}. Adivinha aí meu número, parça, mas só tem 10 tentativas.`)
    
    while (acertou == false) {
        if (tentativas == 10) {
            alert ('Você perdeu, seu bosta.')
            acertou = true
        } else if (chute == numeroAleatorio) {
            alert ('boa!')
            acertou = true
        } else {
            if (chute < numeroAleatorio) {
                var chute = prompt ('O número é maior que seu chute. Tenta de novo.')
            } else if (chute > numeroAleatorio) {
                var chute = prompt ('O número é menor que seu chute. Tenta de novo.')
            }
            tentativas++
        }
    }

})