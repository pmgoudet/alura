function alterarStatus(num) {
    let game = document.getElementById('game-'+ num);
    
    let img = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    
    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
    
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = "Alugar"
    } else {
        img.classList.add('dashboard__item__img--rented');
    
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = "Devolver"
    }
}
