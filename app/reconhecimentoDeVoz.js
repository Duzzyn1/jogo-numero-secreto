const elementoChute = document.getElementById('chute')

// API Web Speech
window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
    // Aparece só oq vc falou, reduzindo os codigos no console
    //  console.log(e.results[0][0].transcript)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

// Quando a função acabar ele pega e continua o reconhecimento de voz até acertar 
recognition.addEventListener('end', () => recognition.start())