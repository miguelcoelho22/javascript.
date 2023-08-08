var pacientes = document.querySelectorAll('.paciente')

for(var x = 0; x < pacientes.length; x += 1) {
    var pa = pacientes[x]

    var tdpeso = pa.querySelector('.info-peso') // peso
    var peso = tdpeso.textContent

    var tdalt = pa.querySelector('.info-altura') // altura
    var alt = tdalt.textContent

    var imc = peso / (alt**2) // imc
    var imctxt = pa.querySelector('.info-imc') 

    var pesocerto = true // alert se for falso
    var alturacerta = true

    if (peso <= 0 || peso >= 400) {
        pesocerto = false
        imctxt.textContent = 'peso invalido'
        pa.classList.add('paciente-invalido')
    }   

    if (alt <= 0 || alt >= 2.5) {
        alturacerta = false
        imctxt.textContent = 'altura invalida'
        pa.classList.add('paciente-invalido')
        
    }

    if (pesocerto && alturacerta) {
        imctxt.textContent = imc.toFixed(2)
    

    }   
}

var botao = document.querySelector('#adicionar-paciente')

botao.addEventListener('click', function(event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

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
   

   pacientetr.appendChild(nometd)
   pacientetr.appendChild(pesotd)
   pacientetr.appendChild(alturatd)
   pacientetr.appendChild(gorduratd)
   pacientetr.appendChild(imctd)

   var tabela = document.querySelector('#tabela-pacientes')

   tabela.appendChild(pacientetr)
})