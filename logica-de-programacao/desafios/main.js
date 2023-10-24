function calculaImc (peso, altura) {
    const imc = peso / (altura*altura)
    return imc.toFixed(1)
}

console.log(calculaImc (70, 1.75))

function fatorial (num) {
    for (i = num-1 ; i >=1 ; i--) {
        num = num * i
    }
    return num
}
console.log (fatorial (6))

function dolar (reais) {
    return reais * 4.80
}
console.log(dolar (10))

function retangulo (altura, largura) {
    var area = altura * largura
    var perimetro = altura*2 + largura*2
    console.log(area)
    console.log(perimetro)
}
retangulo(3, 4)

function circulo (raio) {
    var area = 3.14 * raio * raio
    var perimetro = 2* 3.14 * raio
    console.log(area)
    console.log(perimetro)
}
circulo(4) 

function tabuada (num) {
    for (i = 1 ; i < 11 ; i++) {
        console.log(num*i)
    }
}
tabuada (9)


