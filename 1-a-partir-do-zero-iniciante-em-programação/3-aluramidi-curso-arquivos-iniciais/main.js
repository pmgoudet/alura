const teclado = document.querySelector('.teclado');
const teclas = document.querySelectorAll('.tecla');

teclado.addEventListener('click', (botao) => {
    tocaSom(botao.target.classList[1])
})

function tocaSom (botao) {
    teclas.forEach(() => {
        const som = document.getElementById(`som_${botao}`)
        som.play();
    })
}


//nao resolvi a parada do enter mas foda-se