function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    var idadepessoa = document.querySelector('#txtano');
    var idade = ano - idadepessoa.value;
    var resultado = document.querySelector('#resultado');
    var sex = document.getElementsByName('radsex');
    
    if(idadepessoa.value.length == 0 || idadepessoa.value > ano) {
        window.alert('Você não digitou o ano de nascimento correto');
    } else {
        var genero = ' ';
        if(sex[0].checked) {
            genero = 'homem';
            if(idade > 0 && idade < 20) {
                img.setAttribute('src', 'foto.png');
                resultado.appendChild(img); // Adiciona a imagem ao documento
            } else {
                resultado.removeChild(img); // Remove a imagem do documento se a idade não estiver no intervalo
            }
        } else if(sex[1].checked) {
            genero = 'mulher';
        } else {
            window.alert('Sexo não selecionado');
        }
    }
    resultado.textContent = `Detectamos um(a) ${genero} com ${idade} anos`;
}
