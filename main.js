function tocarSom(idElementAudio) {
    const elemento = document.querySelector(idElementAudio).play();

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}` //template string

    listaDeTeclas[contador].onclick = function () {
        tocarSom(idAudio);
    };

    teclas.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space'){
            teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }

} 