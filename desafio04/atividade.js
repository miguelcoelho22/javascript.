function embaralhar(str) {
    let strseparada = str.split('')
    let resultado = []

    while(strseparada.length){
        let numero = parseInt(Math.random() * strseparada.length)
        let selecionada = strseparada.splice(numero, 1)[0]

       resultado.push(selecionada)
    }
    return resultado.join('')
}

console.log(embaralhar('javascript'))