const dados = {
    nome: 'miguel',
    idade: 17,
    cpf: 131313131313131,
    
}

const palavraschave = ['nome', 'idade', 'cpf']

palavraschave.forEach( (chave) => {
    console.log(`a chave ${chave} tem valor ${dados[chave]}`)
})

dados.telefone = [{
    num: 37998644777,
    nom: 37998634777,
    sim: false
}]

dados.telefone.push({
        sim: true,
        nem:9393939393993,
        nim:040204020402,
    })

console.log(dados)

