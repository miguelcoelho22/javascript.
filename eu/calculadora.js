let nomes = ['miguel', 'mariana', 'alcineia']
let notas = [8, 10, 4]

for(let x = 0; x <nomes.length; x++) {
    let nome = nomes[x]
    let nota = notas[x]
    if(nota < 6) {
        notas.splice(x, 1)
        nomes.splice(x, 1)
    }
}

console.log(nomes)
console.log(notas)