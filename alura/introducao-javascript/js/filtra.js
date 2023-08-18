var filtro = document.querySelector('#filtrar-tabela')
var paciente = document.querySelectorAll('.paciente')

filtro.addEventListener('input', function(){
    console.log(this.value)
    if(this.value.length > 0) {
        for(var i = 0; i < paciente.length; i++){
            var pacientes = paciente[i]
            var nometd = pacientes.querySelector('.info-nome')
            var nome = nometd.textContent
            console.log(nome)
            if(nome != this.value) {
                pacientes.classList.add('esconder')
            }else{
                pacientes.classList.remove('esconder')
            }
            
            }
    } else {
        for(var i = 0; i < paciente.length; i++){
        var pacientes = paciente[i]
        pacientes.classList.remove('esconder')
    }
    
    }
}) 