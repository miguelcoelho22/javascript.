paciente = document.querySelector('#paciente-01')

var pesotxt = paciente.querySelector('.info-peso')
var peso = pesotxt.textContent

var alturatxt = paciente.querySelector('.info-altura')
var altura = alturatxt.textContent

var imctxt = paciente.querySelector('.info-imc')
var imc = peso / altura ** 2

imctxt.textContent = imc

if(peso <= 0 || peso > 400) {
    imctxt.textContent = 'peso invalido'
    
}