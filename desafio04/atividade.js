
function clicou() {
    let num = document.querySelector('#num')
    let texto = document.querySelector('#tabuada')

    if (num.value.length == 0) {
        window.alert('erro, voce nao digitou um numero')
    }
    else {
        let c = 1
        let x = Number(num.value)
        while (c <= 10) {
            let y = c * x
            let item = document.createElement('option')
            item.text = `${x} * ${c} = ${y} `
            texto.appendChild(item)

            c += 1
            
        }
    }
}