const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
   chute = e.results[0][0].transcript;
   exibeChuteNaTela(chute);
   verificaValidadeChute(chute);
}

function exibeChuteNaTela(chute) {
   elementoChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
   `;
}