const dados = require('./clientes.json')

 function encontrar (lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
 }

 let pessoa = encontrar(dados, 'nome', 'Olva')

 console.log(pessoa)