function toca (seletorAudio)  {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio' ) {
        elemento.play();
    } else {
        console.log('Erro!');
    }
}

const Lista = document.querySelectorAll('.tecla');

for (let contador = 0; contador < Lista.length; contador++) { //lenght para caso nao saibamos até onde vao os numeros
    const tecla = Lista[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    //console.log(instrumento)
    
    Lista[contador].onclick = function() {
        toca(idAudio);
    }

    tecla.onkeydown = function(evento) { //isso é pra fazer o botão mudar de cor quando acionado pelo "Enter". onkeydown se refere ao teclado.

        if (evento.code == "Space" || evento.code == "Enter") {
            tecla.classList.add('ativa');
        } 

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    } 
}
