function carregou() {
    var texto = document.querySelector('#text')
    var imagem = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 19
    texto.innerHTML = (`agora sao ${hora}:${min} horas`)

    if (hora >=18 && hora > 5 ) {
        imagem.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'grey'
    }

    else if (hora >= 5 && hora < 12) {
        imagem.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = 'yellow'
    }

    else {
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'green'
    }
}