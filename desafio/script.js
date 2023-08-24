function carregar() {
    var texto = document.querySelector('#text')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    console.log(hora)
    texto.textContent = `agora sao ${hora} horas`
        if(hora >= 0 && hora < 12) {
            imagem.src = 'imagens/manha.jpg'
        }
        else if(hora >= 12 && hora < 18) {
            imagem.src = 'imagens/tarde.jpg'
        } 
}