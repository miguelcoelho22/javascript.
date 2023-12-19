function verificar() {

    var numero = parseInt(document.querySelector('#numero').value)
    var tabu = document.querySelector('#tabuada')
    for(let i = 0; i <= 10 ; i++) {
        
        let item = document.createElement('td')
        let linha = document.createElement('tr')
        let resultado = numero * i
        item.textContent = `${numero} x ${i} = ${resultado}`
        linha.appendChild(item)
        tabu.appendChild(linha)

    }
}   