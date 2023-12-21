function verificar() {
    var numero = parseInt(document.querySelector('#num').value)
    
    if(isNaN(numero)) {
        window.alert(' voce digitou um valor invalido')
    }else {
        var tabuada = document.querySelector('#resultado')
    
        let linha = document.createElement('td')
        let coluna = document.createElement('tr')
        linha.textContent = `valor ${numero} adicionado`
        coluna.appendChild(linha)
        tabuada.appendChild(coluna)
    


    numeros.push(numero)

    console.log(numeros)
    }
    
}   
        
var numeros = []

function calcular() {
    var resultado = document.querySelector('#resultado2')
    let soma = 0
    let menorvalor = numeros[0]
    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
        if(numeros[i] <= menorvalor) {
            menorvalor = numeros[i]
        }
    }
    let media = soma/numeros.length
    console.log(menorvalor)
    
    resultado.innerHTML = ' '
    resultado.innerHTML += `ao todo temos ${numeros.length} valores adicionados`

    
    resultado.innerHTML += ` o menor valor adicionado é ${menorvalor}`

    
    resultado.innerHTML += ` a media dos valores adicionados é ${media} `
   
   
    
}
