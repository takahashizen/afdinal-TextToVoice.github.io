const convertBtn = document.querySelector(".convert-btn");
const selectedVoice = document.querySelector("select");
const textToConvert = document.querySelector("#text-to-convert");

const synth = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = function(){

    voices = synth.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => (selectedVoice.options[index] = new Option(voice.name, index)));
}

selectedVoice.addEventListener("change", function(){

    const voiceIndex = selectedVoice.selectedIndex;
    speech.voice = voices[voiceIndex];
})

convertBtn.addEventListener("click", function(){

    const text = textToConvert.value;

    if(text == ""){
        speech.text = "Enter text to convert."
        synth.speak(speech);
    }
    else{
        speech.text = text;
        synth.speak(speech);
    }

})