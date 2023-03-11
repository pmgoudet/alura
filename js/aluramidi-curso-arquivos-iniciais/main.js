function toca (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
}

const Lista = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < Lista.length) { //lenght para caso nao saibamos até onde vao os numeros
    Lista[contador].onclick = toca;
    contador = contador + 1;
    console.log(contador);
}
