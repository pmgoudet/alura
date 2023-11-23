
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const teclas = document.querySelectorAll('.tecla');

for (let i = 0 ; i < teclas.length ; i++) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    
    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === "Space" || evento.code === "Enter" ) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}