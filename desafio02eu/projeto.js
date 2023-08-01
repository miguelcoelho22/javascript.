function clicou() {
    var nas = document.querySelector('#nas')
    var sexo = document.getElementsByName('sex')
    var texto = document.querySelector('#img')

    var data = new Date()
    var ano =  data.getFullYear()
    var idade = ano - Number(nas.value)
    
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')

    if (nas.value.length == 0 || Number(nas.value) > ano) {
        window.alert('erro')
    }

    else {
        var genero = ' '
        if (sexo[0].checked) {
            genero = 'masculino'
           if (idade >= 0 && idade < 10) {
            imagem.setAttribute('src', 'imagens/kid.jpg')

           }
           
           else if (idade <=18) {
            imagem.setAttribute('src', 'imagens/teen.jpg')
           }
           else if (idade <=50) {
            imagem.setAttribute('src', 'imagens/adulto.jpg')
           }
           else {
            imagem.setAttribute('src', 'imagens/velho.jpg')
           } }
        else if (sexo[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {

            }
            
            else if (idade <=18) {
     
            }
            else if (idade <=50) {
     
            }
            else {
                 
            }
            }
             
        }
        texto.innerHTML = `identificamos um individuo do sexo ${genero} com ${idade} anos`
        texto.appendChild(imagem)
    }

