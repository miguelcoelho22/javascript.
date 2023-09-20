const cliente = {
    nome: 'miguel',
    cpf: 13351752610,
    saldo: 200,
}

cliente.idade = [{
    miguel: 18,
}]

cliente.idade.push({
    mariana: 22,
    enio: 20,
    alcineia: 16,
})
const maiordeidade = cliente.idade.filter(elemento => elemento.mariana >= 18)

console.log(maiordeidade)