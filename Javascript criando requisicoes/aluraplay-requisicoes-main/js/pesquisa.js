import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js"

async function pesquisa (evento) {
    evento.preventDefault ();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    // Após o filtro, os elementos antigos não eram apagados. Ele incluíai o que foi filtrado à lista completa. Eu resolvi com o velho lista.innerHTML = "", mas aqui tem outra proposta para apagar cada item em loop:

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    } //enquanto houver um primeiro item na lista ele apaga, até não sobrar nenhum.

    busca.forEach(elemento => {lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
    });

    if (busca.length == 0) {
        lista.innerHTML = "Isso que você buscou não existe."
    }

}

const btnPesquisa = document.querySelector('[data-botao-pesquisa]');
btnPesquisa.addEventListener('click', evento => {
    pesquisa(evento);
})