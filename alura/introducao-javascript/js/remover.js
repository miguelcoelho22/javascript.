var pacientes = document.querySelectorAll('#paciente')

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]
    paciente.addEventListener('dblclick', function(){
        console.log('fui clicado 2 vezes')
    })

}