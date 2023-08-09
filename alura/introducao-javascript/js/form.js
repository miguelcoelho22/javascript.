var botao = document.querySelector('#adicionar-paciente')

botao.addEventListener('click', function(event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    if(form.nome.value == ' ' || form.peso.value == ' ' || form.altura.value == ' ' || form.gordura.value == 0) {
        window.alert('erro, alguma informaçao nao foi digitada')
    }


    else {

        var paciente = dadosDoPaciente(form)
        

        var pacientetr = document.createElement('tr')

        var nometd = document.createElement('td')
        var pesotd = document.createElement('td')
        var alturatd = document.createElement('td')
        var gorduratd = document.createElement('td')
        var imctd = document.createElement('td')

        nometd.textContent = nome
        pesotd.textContent = peso
        alturatd.textContent = altura
        gorduratd.textContent = gordura
        imctd.textContent = calculaimc(peso,altura)

        pacientetr.appendChild(nometd)
        pacientetr.appendChild(pesotd)
        pacientetr.appendChild(alturatd)
        pacientetr.appendChild(gorduratd)
        pacientetr.appendChild(imctd)

        tabela = document.querySelector('#tabela-pacientes')
        tabela.appendChild(pacientetr)
        
    }
})

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