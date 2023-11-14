function carregou() {
    var conteudo = document.querySelector('#texto')
    var data = new Date()
    var hora = data.getHours()
    conteudo.textContent = `agora sao ${hora} horas`
    console.log(hora)

    if hora > 0 
}