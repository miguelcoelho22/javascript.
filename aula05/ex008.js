var data = new Date()
var agora = data.getDay()

switch (agora) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    default:
        console.log('dia invalido')
        break
}