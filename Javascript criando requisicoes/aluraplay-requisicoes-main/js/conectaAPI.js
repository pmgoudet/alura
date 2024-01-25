async function listaVideos() {
    const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();
        
    return videos;
}

async function criaVideo (titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideo
}






/* PEDRO

const areaVideos = document.querySelector('.videos__container');

async function mostraVideos() {
    try {

        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
        console.log(videos);
        
        videos.forEach(video => {
            areaVideos.innerHTML += `
            <li class="videos__item">
            <iframe width="100%" height="72%" src="${video.url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <div class="descricao-video">
            <img src="${video.imagem}" alt="logo canal alura">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
            </div>
            </li>
            `
        });
    } catch (error) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`
    }

}

mostraVideos();

*/