var pacientes = document.querySelectorAll('.paciente')

for(var x = 0; x < pacientes.length; x += 1) {
    var pa = pacientes[x]

    var tdpeso = pa.querySelector('.info-peso') // peso
    var peso = tdpeso.textContent

    var tdalt = pa.querySelector('.info-altura') // altura
    var altura = tdalt.textContent

    
    var imctxt = pa.querySelector('.info-imc') 

    var pesocerto = true // alert se for falso
    var alturacerta = true

    if (peso <= 0 || peso >= 400) {
        pesocerto = false
        imctxt.textContent = 'peso invalido'
        pa.classList.add('paciente-invalido')
    }   

    if (altura <= 0 || altura >= 2.5) {
        alturacerta = false
        imctxt.textContent = 'altura invalida'
        pa.classList.add('paciente-invalido')
        
    }

    if (pesocerto && alturacerta) {
        var imc = calculaimc(peso,altura)
        imctxt.textContent = imc
    } 
}
function calculaimc(peso,altura) {
    var imc = 0
    imc = peso/(altura**2)

    return imc.toFixed(2)
}
