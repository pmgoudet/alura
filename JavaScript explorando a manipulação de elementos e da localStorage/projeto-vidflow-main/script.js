const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() { // transformar em função assincrona para evitar confusão no caso de ter muitos "then". O then só será executado depois do comando await abaixo

   try {
      const busca = await fetch("http://localhost:3000/videos"); //permite buscar na API de videos e retornar uma PROMISSE. Uma vez a promisse fulfilled, temos que fazer algo com ela:
      const videos = await busca.json();
      
      videos.forEach((video) => {
         containerVideos.innerHTML += `
         <li class="videos__item">
         <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
         <div class="descricao-video">
         <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
         <h3 class="titulo-video">${video.titulo}</h3>
         <p class="titulo-canal">${video.descricao}</p>  
         <p class="categoria" hidden>${video.categoria}</p>  
         </div> 
         </li>
         `;
      })
   } catch(error){
      containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`
   }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa () {
   const videos = document.querySelectorAll(".videos__item");

   if (barraDePesquisa.value != "") {
      videos.forEach((video) => {
         let titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
         let valorFiltro = barraDePesquisa.value.toLowerCase();
         
         if (!titulo.includes(valorFiltro)) { // isso some com o vídeo que não está incluso no valor que vc digitou
            video.style.display = "none";
         } else { 
            video.style.display = "block";
         }
      }) 
   } else {
      video.style.display = "block";
   }
      
}

const botaoCategoria = document.querySelectorAll('.superior__item');

botaoCategoria.forEach((botao) => {
   let nomeCategoria = botao.getAttribute('name');
   botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro) {
   const videos = document.querySelectorAll(".videos__item");
   
   videos.forEach((video) => {
      let categoria = video.querySelector('.categoria').textContent.toLowerCase();
      let valorFiltro = filtro.toLowerCase();

      if (!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
         video.style.display = 'none'
      } else {
         video.style.display = 'block'
      }
   })


}
