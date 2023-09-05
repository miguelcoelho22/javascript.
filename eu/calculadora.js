let botao = document.querySelector('#botao')
let n1 = document.querySelector('#num')
let n2 = document.querySelector('#nom')

var resultado = document.querySelector('#resultado')

botao.addEventListener('click', function() {
    let soma = Number(n1.value) + Number(n2.value)
    resultado.textContent = soma
    if( soma < 0) {
        resultado.classList.add('vermelho')
    }
})