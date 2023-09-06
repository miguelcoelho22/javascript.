const notas = [1, 2, 4, 5]
let media = 0
for(let x = 0; x < notas.length; x++){
    let pos = notas[x]
    media += pos

}
let total = media/notas.length
console.log(total)
