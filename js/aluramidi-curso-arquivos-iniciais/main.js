function toca (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
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
}
