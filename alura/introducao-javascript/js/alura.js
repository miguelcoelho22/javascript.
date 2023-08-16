var pacientes = document.querySelectorAll('.paciente')

for(var x = 0; x < pacientes.length; x += 1) {
    var pa = pacientes[x]

    var tdpeso = pa.querySelector('.info-peso') // peso
    var peso = tdpeso.textContent

    var tdalt = pa.querySelector('.info-altura') // altura
    var altura = tdalt.textContent

    
    var imctxt = pa.querySelector('.info-imc') 

    var pesocerto = pesohevalido(peso)
    var alturacerta = alturahecerta(altura)

        if(!pesocerto) {
        imctxt.textContent = 'peso invalido'
        pa.classList.add('paciente-invalido')
    }   

    if(!alturacerta) {
        imctxt.textContent = 'altura invalida'
        pa.classList.add('paciente-invalido')
        
    }

    if (pesocerto && alturacerta) {
        var imc = calculaimc(peso,altura)
        imctxt.textContent = imc
    } 
}

function pesohevalido(peso){
    if(peso >= 0 && peso < 600){
        return true
    }else{                                                                      
        return false
    }
}

function alturahecerta(altura) {
    if(altura >= 0 && altura < 3){
        return true
    }else {
        return false
    }
}
function calculaimc(peso,altura) {
    var imc = 0
    imc = peso/(altura**2)

    return imc.toFixed(2)
}
