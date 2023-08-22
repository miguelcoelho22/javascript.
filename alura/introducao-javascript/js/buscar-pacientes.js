var botao = document.querySelector('#buscar-paciente')

botao.addEventListener('click',function(){
    var xhr = new XMLHttpRequest()

    xhr.open('get','https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json')

    xhr.send()

    xhr.addEventListener('load',function(){
        if (xhr.status == 200) {
            var resposta = xhr.responseText

            var pacientes = JSON.parse(resposta)

            for(var i = 0 ; i < pacientes.length; i++){
                paciente = pacientes[i]
                adicionanatabela(paciente)
        }
        }else{
            console.log(Xhr.status)
            var span = document.querySelector('#erro')
            span.classList.remove('esconder')
        }
        
        })
    })
