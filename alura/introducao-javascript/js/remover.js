var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function(event){
    var solo = event.target
    var todo = solo.parentNode.remove()
})