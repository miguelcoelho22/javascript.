var botao = document.querySelector('#adicionar-paciente')

botao.addEventListener('click', function(event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    if(form.nome.value === '' || form.peso.value === '' || form.altura.value === '' || form.gordura.value === '') {
        window.alert('erro, alguma informaçao nao foi digitada')
    }


    else {
        var paciente = dadosDoPaciente(form)

        var erros = validapaciente(paciente)
        if(erros.length > 0){
            exibeerro(erros)
            return
        }

        var pacientetr = montaTr(paciente)
        
        var tabela = document.querySelector('#tabela-pacientes')
        tabela.appendChild(pacientetr)

        form.reset()
        var retirarerro = document.querySelector('#mensagens-erro')
        retirarerro.innerHTML = ''

    }
})

function exibeerro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ''

    for(var i = 0;i < erros.length; i++){
        var li = document.createElement('li')
        var erro = erros[i]
        li.textContent = erro
        ul.appendChild(li)
        li.classList.add('erro-css')
    }
}
function dadosDoPaciente(form) {

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)
    }

    return paciente

}

function montaTr(paciente) {
    var pacientetr = document.createElement('tr')
    pacientetr.classList.add('paciente')

    pacientetr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacientetr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacientetr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacientetr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacientetr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacientetr
        
}
function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado

    return td
}

function validapaciente(paciente) {
    var erros = []

    if(!pesohevalido(paciente.peso)) erros.push('peso é invalido')
        
    if(!alturahecerta(paciente.altura)) erros.push('altura é invalida')

    return erros
}