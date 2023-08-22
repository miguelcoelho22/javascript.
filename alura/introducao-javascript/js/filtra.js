var filtro = document.querySelector('#filtrar-tabela')
var pacientes = document.querySelectorAll('.paciente')

filtro.addEventListener('input',function(){
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var nometd = paciente.querySelector('.info-nome')
        var nome = nometd.textContent
        var expressao = new RegExp(this.value, 'i')
        if(expressao.test(nome)){
            paciente.classList.remove('esconder')
        }else{
            paciente.classList.add('esconder')
        }
    }
})