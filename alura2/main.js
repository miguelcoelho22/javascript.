var main = document.querySelector('.teclado')
var teclas = document.querySelectorAll('.tecla')

    for(var i = 0; i < teclas.length; i++){
        let tecla = teclas[i]
        tecla.addEventListener('click', function(){
        
        var ida = tecla.classList[1]
        qualSom(`#som_${ida}`)
        console.log(`som_${ida}`)
        })
   
}

function qualSom(id){
    var som = document.querySelector(id).play()
    
}