var pacientes = document.querySelectorAll('.paciente')

for (var x = 0; x < pacientes.length; x += 1) {

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
        pa.style.color = 'red'
    }   

    if (alt <= 0 || alt >= 2.5) {
        alturacerta = false
        imctxt.textContent = 'altura invalida'
        pa.style.color = 'red'
    }

    if (pesocerto && alturacerta) {
        imctxt.textContent = imc.toFixed(2)
    

    }   
}

