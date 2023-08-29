const botoes  = document.querySelectorAll('.controle-ajuste')
const resultado = document.querySelector('#braco')

for(let i = 0; i < botoes.length; i++){
    let botao = botoes[i]
    botao.addEventListener('click', (evento) => {
        somar(evento.target.textContent)
        console.log(botao)
})

}
function somar(operacao) {
    if(operacao === '-'){
        resultado.value = parseInt(resultado.value) - 1
    }
    else{
        resultado.value = parseInt(resultado.value) + 1
}
}