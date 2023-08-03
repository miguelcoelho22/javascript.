function clicou() {
    var inicio = document.querySelector('#nic')
    var fim = document.querySelector('#fim')
    var razao = document.querySelector('#pas')
    var texto = document.querySelector('#res')

    texto.innerHTML = 'contando: '

    let x = Number(inicio.value)
    let y = Number(fim.value)
    let z = Number(razao.value)

    if (x == 0 || y == 0 || z == 0) {
        window.alert('erro, algum campo nao foi digitado')
    }
    else {
        while(x <= y) {
            texto.innerHTML += `${x} == >`
            x += z
        }

        }
        }