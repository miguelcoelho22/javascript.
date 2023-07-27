function clicou() {
    var nascimento = document.querySelector('#num')
    var sexo = document.getElementsByName('sex')
    var texto = document.querySelector('#imagem')

    var data = new Date()
    var atual = data.getFullYear()

    var idade = atual - Number(nascimento.value)

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (nascimento.value.length == 0 || Number(nascimento.value) > atual) {
        window.alert('voce digitou algo errado, tente novamente')
    }

    else {
        var genero = ' '
        if (sexo[0].checked) {
            genero = 'masculino'
            if (idade >=0 && idade <=10) {
                img.setAttribute('src', 'imagens/kid.jpg')
            }
            else if (idade <=18) {

            }
            else if (idade <=50) {

            }
            else {

            }
        }
        else {
            genero = 'feminino'
            if (idade <=10) {

            }
            else if (idade <=18) {

            }
            else if (idade <=50) {

            }
            else {
                
            }
        }
        texto.innerHTML = `detectamos um individuo do sexo ${genero} com ${idade} anos` 
        texto.appendChild(img)
    }
}