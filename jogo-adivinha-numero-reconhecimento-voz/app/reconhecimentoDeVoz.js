const boxChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
   chute = e.results[0][0].transcript;
   console.log(e)
   exibeChuteNaTela(chute) 
}

function exibeChuteNaTela(chute) {
   boxChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
   `
}