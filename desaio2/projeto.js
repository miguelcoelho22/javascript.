function clicou() {
    var ano = document.querySelector('#num')
    var res = document.querySelector('#imagem')
    var sex = document.getElementsByName('isex')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var data = new Date()
    var atual = data.getFullYear()

    var x = atual - Number(ano.value)

    if (ano.value.length == 0 || Number(ano.value) > atual) {
        window.alert('verifique os dados e tente novamente')
    }
    else {
        var genero = ' '
        if (sex[0].checked) {
            genero = 'homem'
            if  (idade >=0 && idade < 10) {
                img.setAttribute('src', 'kid.jpg')
            }
            if else (idade < 21) {

            }
             if else (idade < 50) {

            }
            else {

            }
        }
        else {
            genero = 'mulher'
            if  (idade >=0 && idade < 10) {
                
            }
            if else (idade < 21) {

            }
             if else (idade < 50) {

            }
            else {
                
            }
        }
        res.innerHTML = `${genero} de ${x} anos`
        
    }
    
}
   