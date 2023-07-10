function carregar() {
    var text = document.querySelector('#text')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    text.innerHTML = (`agora sao ${hora} horas.`)
    

    if (hora >= 5 && hora < 12 ) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = 'rgb(219, 144, 46)'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'aqua'
    }
    else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'rgb(53, 50, 50)'
    }

}
